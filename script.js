// Créer la carte avec tuiles OpenStreetMap
const map = new maplibregl.Map({
    container: 'map',
    style: {
        "version": 8,
        "sources": {
            "osm-tiles": {
                "type": "raster",
                "tiles": [
                    "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ],
                "tileSize": 256
            }
        },
        "layers": [
            {
                "id": "osm-tiles",
                "type": "raster",
                "source": "osm-tiles",
                "minzoom": 0,
                "maxzoom": 19
            }
        ]
    },
    center: [-1.664558, 48.111172], // Rennes
    zoom: 12
});




// Ajouter contrôle de zoom et rotation
map.addControl(new maplibregl.NavigationControl());



