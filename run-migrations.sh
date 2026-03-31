#!/bin/sh
set -e 

echo "Waiting for database to be ready..."

until pg_isready -h db -p "${DB_PORT}" -U "${DB_USER}"; do
  echo "Database not ready yet, sleeping..."
  sleep 2
done

echo "Database is ready. Running migrations..."

dotnet ef database update --project Backend/Backend.csproj

echo "Migrations completed successfully."