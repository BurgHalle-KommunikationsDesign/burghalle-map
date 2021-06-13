## Leaflet

Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.<br>
https://leafletjs.com/

## Tiles

Behind the scenes a leaflet map is build from 256 x 256 px sized PNG tiles.

Level | Size | Tiles | Total
--- | --- | --- | ---
1 | 256 x 256 | 1x1 | 1
2 | 512 x 512 | 2x2 | 4
3 | 1024 x 1024 | 4x4 | 16
4 | 2048 x 2048 | 8x8 | 64
5 | 4096 x 4096 | 16x16 | 256
6 | 8192 x 8192 | 32x32 | 1024
7 | 16384 x 16384 | 64x64 | 4096
8 | 32768 x 32768 | 128x128 | 16384

## Generate Tiles

Tiles are generated from one big JPEG or TIFF.
The tool we use to generate the tiles is **Gdal2Tiles**.
It's a python script which splits the image into different folders and files:

`/{zoom-level}/{x-axis}/{y-axis}.png`

## Using Gdal2Tiles

Make sure to use Python 3 and install python-gdal.
For details check the gdal2tiles repository: https://github.com/commenthol/gdal2tiles-leaflet

```
cd _gdal2tiles-leaflet-master
python gdal2tiles.py -p raster --z 0-6  image.jpg ../tiles
```
