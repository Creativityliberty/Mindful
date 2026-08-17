#!/bin/sh
set -eu

cd /var/www/html

echo "Preparing Laravel..."

# Rebuild Laravel caches from the runtime environment injected by Coolify.
php artisan config:clear || true
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Wait for the configured database connection before running migrations.
max_attempts="${DB_WAIT_MAX_ATTEMPTS:-30}"
attempt=1

echo "Waiting for database connection..."

until php artisan db:show >/dev/null 2>&1; do
    if [ "$attempt" -ge "$max_attempts" ]; then
        echo "ERROR: Database connection failed after $max_attempts attempts."
        echo "Database diagnostic:"
        php artisan db:show || true
        exit 1
    fi

    echo "Database unavailable - attempt $attempt/$max_attempts"
    attempt=$((attempt + 1))
    sleep 2
done

echo "Database connected. Running migrations..."
php artisan migrate --force

# Keep storage link idempotent across deployments.
php artisan storage:link --force 2>/dev/null || true

echo "Starting Supervisor / PHP-FPM / Nginx..."
exec /usr/bin/supervisord -n -c /etc/supervisord.conf
