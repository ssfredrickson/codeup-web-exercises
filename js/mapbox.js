

mapboxgl.accessToken = myMapboxKey;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    zoom: 10, // starting zoom
    center: [-98.1261, 29.700345] // [lng, lat]
});

let huisacheMarker = new mapboxgl.Marker()
    .setLngLat([-98.1261, 29.700345])
    .addTo(map);

let grueneCoffeeMarker = new mapboxgl.Marker()
    .setLngLat([-98.101575, 29.73961])
    .addTo(map);

let gristmillMarker = new mapboxgl.Marker()
    .setLngLat([-98.10509, 29.73808])
    .addTo(map);

let huisachePopUp = new mapboxgl.Popup()
    .setHTML("<h3>Huisache Grill</h3><p>An intimate and casual restaurant serving\n" +
        "creative contemporary cuisine with\n" +
        "fresh regional ingredients</p><a href='https://huisachegrill.com/menu/' target='_blank'>Menu</a>"
        )

let grueneCoffeeMarkerPopUp = new mapboxgl.Popup()
    .setHTML("<h3>Gruene Coffee Hause</h3><p>EVERY MORNING DESERVES AN UPGRADE!</p><a href='https://www.gruenecoffee.com/our-menu' target='_blank'>Menu</a>")

let gristmillMarkerPopUp = new mapboxgl.Popup()
    .setHTML("<h3>Gristmill</h3><p>Located beneath Gruene’s landmark water tower, in the ruins of an 1878 cotton gin, overlooking the Guadalupe River, the Historic Gristmill has been considered one of the most unique dining spots in Texas for nearly half a century. A rare combination of history, location and turn-of-the-century architecture create the Gristmill’s legendary Texas experience.</p> <a href='https://gristmillrestaurant.com/menu/' target='_blank'>Menu</a>")



huisacheMarker.setPopup(huisachePopUp);
grueneCoffeeMarker.setPopup(grueneCoffeeMarkerPopUp)
gristmillMarker.setPopup(gristmillMarkerPopUp)



console.log(geocode("303 W. San Antonio St. New Braunfels, Texas", myMapboxKey))

console.log(geocode("1720 Hunter Rd, New Braunfels, TX 78130", myMapboxKey))

console.log(geocode("1287 Gruene Rd, New Braunfels, TX 78130", myMapboxKey))