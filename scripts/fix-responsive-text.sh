#!/bin/bash

# Fix responsive text sizes across all pages
# Replaces large mobile text sizes with responsive breakpoints

cd "$(dirname "$0")/.."

echo "Fixing responsive text sizes..."

# Replace text-6xl lg:text-8xl with responsive version
find app -name "*.tsx" -type f -exec sed -i 's/text-6xl lg:text-8xl/text-4xl md:text-6xl lg:text-8xl/g' {} +

# Replace text-5xl lg:text-7xl with responsive version
find app -name "*.tsx" -type f -exec sed -i 's/text-5xl lg:text-7xl/text-3xl md:text-5xl lg:text-7xl/g' {} +

# Replace standalone text-8xl (the big numbers) with responsive version
find app -name "*.tsx" -type f -exec sed -i 's/\btext-8xl\b/text-6xl md:text-8xl/g' {} +

# Replace standalone text-9xl with responsive version
find app -name "*.tsx" -type f -exec sed -i 's/\btext-9xl\b/text-6xl md:text-8xl lg:text-9xl/g' {} +

echo "Done! All headings are now responsive."
