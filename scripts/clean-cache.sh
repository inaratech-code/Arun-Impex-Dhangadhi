#!/bin/bash
# Clean Next.js cache files before build
echo "Cleaning Next.js cache files..."
rm -rf .next/cache
rm -rf .next/cache/webpack
echo "Cache cleaned successfully!"

