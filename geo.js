const fs = require('fs');

// Read the existing JSON data
fs.readFile('Tracker_Geofence.json', 'utf8', (err, data) => {
    if (err) throw err;

    // Parse the JSON data
    const originalData = JSON.parse(data);

    // Transform the data to extract necessary fields
    const transformedData = originalData.Sheet1.map(site => {
        return {
            lat: site["Site name with coordinates.Latitude"],
            lon: site["Site name with coordinates.Longitude"],
            id: site["Site Number"],
            name: site["Site Name"],
            geofenceDistance: site["Geofence Distance"],
            geofenceCategory: site["Geofence Category"],
            icon: "https://raw.githubusercontent.com/KKEsty2024/GhanaSites/main/cell%20tower.jpg" // Cell tower icon for all sites
        };
    });

    // Write the transformed data to a new JSON file
    fs.writeFile('geo__sites.json', JSON.stringify(transformedData, null, 2), (err) => {
        if (err) throw err;
        console.log('Transformed JSON saved as transformed_sites.json');
    });
});
