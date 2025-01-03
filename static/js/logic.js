const earthquakeDataUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

// Fetch and parse the earthquake data
fetch(earthquakeDataUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Check data structure
        createMap(data.features); // Correct function call
    })
    .catch(error => console.error("Error fetching earthquake data:", error));

// Initialize the map
const map = L.map('map').setView([0, 0], 2); // set the centering and zoom

// Add map tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add earthquake markers
function createMap(earthquakes) {
    earthquakes.forEach(eq => {
        const [longitude, latitude, depth] = eq.geometry.coordinates;
        const magnitude = eq.properties.mag;

        // Set marker size and color
        const markerSize = magnitude * 2.5;
        const markerColor = depth > 90 ? "#FFC0CB" :
                            depth > 70 ? "#E6E6FA" :
                            depth > 50 ? "#9370DB" :
                            depth > 30 ? "#98FF98" : "#32CD32";

        // Add the marker to map
        L.circle([latitude, longitude], { // Corrected 'longitude'
            color: markerColor,
            fillColor: markerColor, // Added fillColor
            radius: markerSize * 10000,
            fillOpacity: 0.7
        }).addTo(map)
        .bindPopup(`
            <strong>Location:</strong> ${eq.properties.place}<br>
            <strong>Magnitude:</strong> ${magnitude}<br>
            <strong>Depth:</strong> ${depth} km
        `);
    });
}

// Add Legend
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function() {
    const div = L.DomUtil.create('div', 'legend');
    const depths = [0, 30, 50, 70, 90];
    const colors = ["#FFC0CB", "#E6E6FA", "#9370DB", "#98FF98", "#32CD32"];

    div.innerHTML = "<h4>Depth (km)</h4>";

    // Add color boxes to the legend
    depths.forEach((depth, index) => {
        div.innerHTML += `
            <i style="background-color: ${colors[index]}; width: 18px; height: 18px; display: inline-block; margin-right: 8px;"></i> 
            ${depth} - ${depths[index + 1] || '+'}<br>`;
    });

    return div;
};

legend.addTo(map);
