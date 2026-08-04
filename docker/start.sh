#!/bin/sh
set -e

cd /var/www/html

# Cache configs first (doesn't need DB)
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Wait for database to be available before running migrations
max_attempts=30
attempt=1

echo "Waiting for database connection..."
until php artisan db:status --database=default 2>/dev/null || [ $attempt -ge $max_attempts ]; do
    echo "Waiting for database... (attempt $attempt/$max_attempts)"
    sleep 2
    attempt=$((attempt+1))
done

if [ $attempt -ge $max_attempts ]; then
    echo "Database connection failed after $max_attempts attempts"
    exit 1
fi

echo "Database connected. Running migrations..."
php artisan migrate --force
php artisan storage:link --force 2>/dev/null || true

echo "Starting services..."
exec /usr/bin/supervisord -n -c /etc/supervisord.conf