# =============================================================================
# Stage 0 — Base PHP-FPM with all extensions compiled exactly once
# =============================================================================
FROM php:8.4-fpm-alpine AS php-base

# Limit parallel compilation jobs to avoid memory exhaustion (OOM) on resource-constrained servers
ENV MAKEFLAGS="-j1"

COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/

RUN apk add --no-cache git curl zip unzip \
    && install-php-extensions bcmath exif gd intl mbstring pcntl pdo_mysql opcache zip

# =============================================================================
# Stage 1 — PHP + Composer dependencies
# =============================================================================
FROM php-base AS composer-deps

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Install dependencies before copying source (layer cache optimization)
COPY composer.json composer.lock ./

ARG GITHUB_TOKEN
ARG COMPOSER_AUTH
RUN if [ -n "$GITHUB_TOKEN" ]; then composer config --global github-oauth.github.com "$GITHUB_TOKEN"; fi \
    && composer config --global process-timeout 2000 \
    && composer install \
        --no-dev \
        --no-scripts \
        --no-interaction \
        --optimize-autoloader \
        --prefer-source

COPY . .

# Discover packages (|| true — APP_KEY not needed at this stage)
RUN php artisan package:discover --ansi 2>/dev/null || true

# =============================================================================
# Stage 2 — Node.js asset + SSR bundle build
# =============================================================================
FROM composer-deps AS node-build

RUN apk add --no-cache nodejs npm

ENV NODE_OPTIONS="--max-old-space-size=1536"
ENV APP_KEY="base64:lqEhaUrvtjm/GV98hP5ukj8jnQEh8XfJf3ZrNKl17GM="
ENV DB_CONNECTION="sqlite"
ENV DB_DATABASE=":memory:"

RUN npm ci --prefer-offline

# Builds both client bundle (public/build) and SSR bundle (bootstrap/ssr)
RUN npm run build:ssr

# =============================================================================
# Stage 3 — Production image (PHP-FPM + Nginx + Supervisor)
# =============================================================================
FROM php-base AS production

LABEL maintainer="pmindfull"

# Runtime system dependencies
RUN apk add --no-cache \
        nginx \
        supervisor \
        curl \
        nodejs npm \
    && rm -rf /var/cache/apk/*

# PHP configuration
COPY docker/php/php.ini        "$PHP_INI_DIR/conf.d/99-app.ini"
COPY docker/php/opcache.ini    "$PHP_INI_DIR/conf.d/10-opcache.ini"
COPY docker/php/php-fpm.conf   /usr/local/etc/php-fpm.d/www.conf

# Nginx
COPY docker/nginx/nginx.conf   /etc/nginx/nginx.conf
COPY docker/nginx/default.conf /etc/nginx/http.d/default.conf

# Supervisor
COPY docker/supervisor/supervisord.conf /etc/supervisord.conf
COPY docker/supervisor/conf.d/          /etc/supervisor/conf.d/

WORKDIR /var/www/html

# Application source (copied in order of change frequency)
COPY --chown=www-data:www-data . .
COPY --from=composer-deps --chown=www-data:www-data /app/vendor        ./vendor
COPY --from=node-build    --chown=www-data:www-data /app/public/build  ./public/build
COPY --from=node-build    --chown=www-data:www-data /app/bootstrap/ssr ./bootstrap/ssr

# Ensure storage directories exist with correct permissions
RUN mkdir -p \
        storage/app/public \
        storage/framework/cache/data \
        storage/framework/sessions \
        storage/framework/testing \
        storage/framework/views \
        storage/logs \
        bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 755 storage bootstrap/cache \
    && mkdir -p /run/nginx \
    && mkdir -p /var/lib/nginx/tmp/client_body \
    && chown -R www-data:www-data /var/lib/nginx \
    && chmod -R 755 /var/lib/nginx

COPY docker/start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=10s --start-period=90s --retries=3 \
    CMD curl -fsS http://127.0.0.1/up > /dev/null || exit 1

CMD ["/usr/local/bin/start.sh"]
