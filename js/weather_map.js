(function () {
  "use strict";
  // ------------------Map Starting Coordinates --------------------

  let myLatLong = [-97.371118, 30.349508]; //Elgin,TX

  mapboxgl.accessToken = MY_MAPBOX_KEY;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/dark-v11", // style URL
    center: myLatLong, // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  // --------------------- Create Draggable Marker ------------------


  const marker = new mapboxgl.Marker({
    draggable: true,
  })
    .setLngLat(myLatLong)
    .addTo(map);


  // --------------------Function to convert degrees to Cardinal Directions ----------

  function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }


  // ------------------------- Create 5 Weather Cards Function ----------------

  const cardHTML = (data) => {
  marker.setPopup(new mapboxgl.Popup({closeButton: false}).setHTML(`<h6>Wind: ${degToCompass(data.list[0].wind.deg)}</h6><h6>${(data.list[0].wind.speed).toFixed(0)} MPH</h6>`))
    data.list.forEach(function (item, index) {
      let milliseconds = item.dt * 1000;
      if (index % 8 === 0) {
        let weatherIconCode = item.weather[0].icon
        $("#card-container").append(`<div class="card col bg-dark" id="weather-cards">
  <div class="card-header">
    <h6>${new Date(milliseconds).toDateString()}</h6>
  </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item"><img id="weather-icon" src="http://openweathermap.org/img/w/${weatherIconCode}.png"> ${item.main.temp.toFixed(0)}&#8457</li>
    <li class="list-group-item">Feels Like: ${item.main.feels_like.toFixed(
      0
    )}&#8457</li>
    <li class="list-group-item">Rain Chance: ${(item.pop * 100).toFixed(
      0
    )} % </li>
  </ul>
</div>`);
      }
    });

  };

  // --------------------------Get Weather data and create cards on load--------------------

  $(window).on("load", function () {
    $.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${myLatLong[1]}&lon=${myLatLong[0]}&units=imperial&appid=${MY_OWM_KEY}`
    ).done(function (data) {
      $("#card-container").empty();
      $("#header")
        .empty()
        .html(`<h1 class="text-dark">${data.city.name}</h1>`);
      cardHTML(data);
    });
  });

  // ------------------------Get Weather Data when marker stops dragging update cards -----------
  let updatedCoordinates = [];
  function onDragEnd() {
    updatedCoordinates = [];
    const lngLat = marker.getLngLat();
    updatedCoordinates.push(lngLat.lng);
    updatedCoordinates.push(lngLat.lat);
    $.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${updatedCoordinates[1]}&lon=${updatedCoordinates[0]}&units=imperial&appid=${MY_OWM_KEY}`
    ).done(function (data) {
      $("#card-container").empty();
      $("#header")
        .empty()
        .append(`<h1 class="text-dark">${data.city.name}</h1>`);
      cardHTML(data);
    });
  }
  marker.on("dragend", onDragEnd);

  let searchLocation = document.querySelector("#location-search");

  // ------------------------- Get weather data from search bar and update cards----------------

  $("#location-search-button").on("click", function (event) {
    event.preventDefault();
    marker.remove();
    let userLocation = geocode(`${searchLocation.value}`, MY_MAPBOX_KEY);
    userLocation.then(function (data) {
      marker.setLngLat(data).addTo(map);
      map.flyTo({
        center: data,
        essential: true,
      });
      $.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${data[1]}&lon=${data[0]}&units=imperial&appid=${MY_OWM_KEY}`
      ).done(function (data) {
        $("#card-container").empty();
        $("#header")
          .empty()
          .append(`<h1 class="text-dark">${data.city.name}</h1>`);
        cardHTML(data);
      });
    });
  });
})();
