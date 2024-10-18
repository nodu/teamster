#!/bin/sh

set -e

echo "Running 'python manage.py makemigrations'..."
/app/bin/app makemigrations

echo "Running 'python manage.py migrate'..."
/app/bin/app migrate

if [ $? -ne 0 ]; then
  echo "Migrations failed! Exiting..."
  exit 1
fi

echo "Starting Django development server..."
exec /app/bin/app runserver --noreload 0.0.0.0:8000
