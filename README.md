# Earthquake Visualization Dashboard

## Overview

The Earthquake Visualization Dashboard is an interactive web application built using JavaScript and Leaflet.js. It visualizes earthquake data from the USGS GeoJSON Feed, allowing users to explore information about earthquake locations, magnitudes, and depths. This project was created as part of a data visualization module in a bootcamp program.

## How to Use

1. Open the deployed dashboard on [GitHub Pages](https://the-eva-a.github.io/leaflet-challenge/).
2. View the world map with earthquake markers.
3. Click on any marker to view additional details about the earthquake, such as location, magnitude, and depth.

## Features

- Dynamic markers:
  - Size represents the earthquake's magnitude.
  - Color represents the depth of the earthquake.
- Popups with detailed earthquake information.
- A color-coded legend to interpret earthquake depth.

## Custom Color Scheme

| Depth Range (km) | Marker Color |
|-------------------|--------------|
| 0-30             | Light Pink (#FFC0CB) |
| 31-50            | Lavender (#E6E6FA) |
| 51-70            | Soft Purple (#9370DB) |
| 71-90            | Mint Green (#98FF98) |
| 91+              | Bright Green (#32CD32) |

## Libraries and Tools

- Leaflet.js: For creating the interactive map.
- USGS GeoJSON Feed: For real-time earthquake data.

