#!/bin/bash

# Create directory for images
mkdir -p public/images

# Download featured image
curl -L "https://source.unsplash.com/random/1200x600/?climate" -o public/images/featured-climate.jpg

# Download category images
curl -L "https://source.unsplash.com/random/800x600/?technology" -o public/images/tech-ai.jpg
curl -L "https://source.unsplash.com/random/800x600/?business" -o public/images/business-stocks.jpg
curl -L "https://source.unsplash.com/random/800x600/?health" -o public/images/health-diet.jpg
curl -L "https://source.unsplash.com/random/800x600/?space" -o public/images/tech-space.jpg

# Download avatar placeholders
curl -L "https://source.unsplash.com/random/100x100/?portrait" -o public/images/avatar-1.jpg
curl -L "https://source.unsplash.com/random/100x100/?face" -o public/images/avatar-2.jpg
curl -L "https://source.unsplash.com/random/100x100/?person" -o public/images/avatar-3.jpg
curl -L "https://source.unsplash.com/random/100x100/?portrait" -o public/images/avatar-4.jpg
curl -L "https://source.unsplash.com/random/100x100/?woman" -o public/images/avatar-5.jpg

echo "All images downloaded successfully!" 