#!/bin/bash

# Script to generate poster images from video files
# Requires ffmpeg to be installed

echo "Generating poster images from video files..."

# Create posters directory if it doesn't exist
mkdir -p videos

# Generate poster for each video file
videos=(
    "Library_Artist_View_demo"
    "Play_Track_demo" 
    "Tempo_demo"
    "Repeat_demo"
    "Start_Delay_demo"
    "Duck_demo"
    "Clock_demo"
)

for video in "${videos[@]}"; do
    if [ -f "videos/${video}.mp4" ]; then
        echo "Generating poster for ${video}..."
        ffmpeg -i "videos/${video}.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "videos/${video}_poster.jpg" -y
        echo "✓ Created videos/${video}_poster.jpg"
    else
        echo "⚠ Video file videos/${video}.mp4 not found"
    fi
done

echo "Poster generation complete!"
echo ""
echo "Note: If you don't have ffmpeg installed, you can:"
echo "- macOS: brew install ffmpeg"
echo "- Or manually extract first frames using video editing software"