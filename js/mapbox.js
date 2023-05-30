mapboxgl.accessToken = myMapboxKey;
var map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  zoom: 10, // starting zoom
  center: [-98.1261, 29.700345], // [lng, lat]
});

let restaurants = [
  {
    name: "Huisache",
    location: [-98.1261, 29.700345],
    description:
      "An intimate and casual restaurant serving\n" +
      "creative contemporary cuisine with\n" +
      "fresh regional ingredients",
    menuLink: "https://huisachegrill.com/menu/",
  },
  {
    name: "Gruene Coffee Haus",
    location: [-98.101575, 29.73961],
    description: "EVERY MORNING DESERVES AN UPGRADE!",
    menuLink: "https://www.gruenecoffee.com/our-menu",
  },
  {
    name: "Gristmill",
    location: [-98.10509, 29.73808],
    description:
      "Located beneath Gruene’s landmark water tower, in the ruins of an 1878 cotton gin, overlooking the Guadalupe River, the Historic Gristmill has been considered one of the most unique dining spots in Texas for nearly half a century. A rare combination of history, location and turn-of-the-century architecture create the Gristmill’s legendary Texas experience.",
    menuLink: "https://gristmillrestaurant.com/menu/",
  },
];

function makeMarkers() {
  restaurants.forEach(function (items) {
    let popup = new mapboxgl.Popup().setHTML(
      `<h3>${items.name}</h3><p>${items.description}</p><a href=${items.menuLink} target='_blank'>Menu</a>`
    );
    let marker = new mapboxgl.Marker()
      .setLngLat(items.location)
      .addTo(map)
      .setPopup(popup);
  });
}

document.querySelector("#add-markers").addEventListener("click", makeMarkers);
