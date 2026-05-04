#!/bin/bash

echo "🚀 Starting asset migration..."

# Get the source directory (your backup) - UPDATE THIS PATH!
SOURCE_DIR="/home/mzoxolob/Videos/sikomining.co.za/sikomining.co.za"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "❌ Source directory not found: $SOURCE_DIR"
    echo "Please update the SOURCE_DIR path in this script"
    exit 1
fi

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p public/css
mkdir -p public/fonts
mkdir -p public/images
mkdir -p public/js
mkdir -p public/videos

# Copy all assets
echo "📦 Copying CSS files..."
cp -rv "$SOURCE_DIR/css/"* public/css/ 2>/dev/null || echo "No CSS files found"

echo "📦 Copying font files..."
cp -rv "$SOURCE_DIR/fonts/"* public/fonts/ 2>/dev/null || echo "No font files found"

echo "📦 Copying images..."
cp -rv "$SOURCE_DIR/images/"* public/images/ 2>/dev/null || echo "No images found"

echo "📦 Copying JavaScript files..."
cp -rv "$SOURCE_DIR/js/"* public/js/ 2>/dev/null || echo "No JS files found"

echo "📦 Copying videos..."
cp -rv "$SOURCE_DIR/videos/"* public/videos/ 2>/dev/null || echo "No videos found"

# Copy favicon to root if exists
if [ -f "public/images/favicon.png" ]; then
    cp public/images/favicon.png public/
    echo "✅ Favicon copied"
fi

echo "✅ Asset migration complete!"
echo ""
echo "📊 Summary:"
echo "   CSS files: $(ls -1 public/css/ 2>/dev/null | wc -l) files"
echo "   Fonts: $(ls -1 public/fonts/ 2>/dev/null | wc -l) files"
echo "   Images: $(ls -1 public/images/ 2>/dev/null | wc -l) files"
echo "   JS files: $(ls -1 public/js/ 2>/dev/null | wc -l) files"
echo "   Videos: $(ls -1 public/videos/ 2>/dev/null | wc -l) files"
