---
title: Media conversion on the command line
description: A collection of snippets for transforming videos and images from the command line.
tags:
  - command-line
  - snippets
---

## Remove EXIF metadata from an image

```bash
# Remove all EXIF metadata.
exiftool -all= image.jpg
# Exclude DateTimeOriginal.
exiftool -all= -DateTimeOriginal\<DateTimeOriginal image.jpg
# Exclude GPSPosition.
exiftool -all= -GPSPosition\<GPSPosition image.jpg
```

## Convert multiple images to PDF

```bash
convert image1.jpg image2.png image3.bmp output.pdf
```

## Remove audio information from a video

```bash
ffmpeg -i input.mp4 -an output.mp4
```

## Convert video to H.264

_Note: Audio disabled_

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 24 -movflags faststart -an output.mp4
```

## Convert video to WEBM

_Note: Audio disabled_

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 40 -an output.webm
```
