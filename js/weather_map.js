(function () {
  "use strict";
// ------------------Map Starting Coordinates --------------------


  let myLatLong = [-97.371118, 30.349508];

  mapboxgl.accessToken = MY_MAPBOX_KEY;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/dark-v11", // style URL
    center: myLatLong, // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  // --------------------- Create Draggable Marker ------------------

  let updatedCoordinates = [];
  const marker = new mapboxgl.Marker({
    draggable: true,
  })
    .setLngLat(myLatLong)
    .addTo(map);

  // ------------------------- Function #1 Get Weather Data on Load ----------------

  $(window).on("load", function () {
    console.log("Function #1");
    $.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${myLatLong[1]}&lon=${myLatLong[0]}&units=imperial&appid=${MY_OWM_KEY}`
    ).done(function (data) {
      console.log(data);

      $("#card-container").empty();
      $("#header")
        .empty()
        .append(`<h1 class="text-info">${data.city.name}</h1>`);
      data.list.forEach(function (item, index) {
        let milliseconds = (item.dt * 1000)
        if (index % 8 === 0) {
          $("#card-container").append(`<div class="card col">
  <div class="card-header">
    <h6>${new Date(milliseconds).toDateString()}</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temp: ${item.main.temp.toFixed(0)}&#8457</li>
    <li class="list-group-item">Feels Like: ${item.main.feels_like.toFixed(
      0
    )}&#8457</li>
    <li class="list-group-item">Chance of Rain: ${(item.pop * 100).toFixed(
      0
    )} % </li>
  </ul>
</div>`);
        } else {
        }
      });
    });
  });

  // ------------------------Function #2 Get Weather Data when marker stops dragging -----------

  function onDragEnd() {
    updatedCoordinates = [];
    const lngLat = marker.getLngLat();
    updatedCoordinates.push(lngLat.lng);
    updatedCoordinates.push(lngLat.lat);
    console.log(updatedCoordinates);

    $.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${updatedCoordinates[1]}&lon=${updatedCoordinates[0]}&units=imperial&appid=${MY_OWM_KEY}`
    ).done(function (data) {
      console.log('Function #2');

      $("#card-container").empty();
      $("#header").empty().append(`<h1 class="text-info">${data.city.name}</h1>`);
      data.list.forEach(function (item, index) {
        let milliseconds = (item.dt * 1000)
        if (index % 8 === 0) {
          $("#card-container")
            .append(`<div class="card col">
  <div class="card-header">
    <h6>${new Date(milliseconds).toDateString()}</h6>
  </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">Temp: ${item.main.temp.toFixed(0)}&#8457</li>
    <li class="list-group-item">Feels Like: ${item.main.feels_like.toFixed(
      0
    )}&#8457</li>
    <li class="list-group-item">Chance of Rain: ${(item.pop * 100).toFixed(
      0
    )} % </li>
  </ul>
</div>`);
        }
      });
    });
  }

  marker.on("dragend", onDragEnd);

  let searchLocation = document.querySelector("#location-search");

  $("#location-search-button").on("click", function (event) {
    event.preventDefault();
    console.log('Function #3');
    marker.remove();
    let userLocation = geocode(`${searchLocation.value}`, MY_MAPBOX_KEY);

    userLocation.then(function (data) {
      marker.setLngLat(data).addTo(map);
      console.log(data)
      map.flyTo({
        center: data,
        essential: true,
      });

      $.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${data[1]}&lon=${data[0]}&units=imperial&appid=${MY_OWM_KEY}`
      ).done(function (data) {
        console.log(data);
        $("#card-container").empty();
        $("#header")
          .empty()
          .append(`<h1 class="text-info">${data.city.name}</h1>`);

        data.list.forEach(function (item, index) {
          let milliseconds = (item.dt * 1000)
          if (index % 8 === 0) {
            $("#card-container").append(`<div class="card col">
  <div class="card-header">
    <h6>${new Date(milliseconds).toDateString()}</h6>
  </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">Temp: ${item.main.temp.toFixed(
     0
   )}&#8457</li>
    <li class="list-group-item">Feels Like: ${item.main.feels_like.toFixed(
      0
    )}&#8457</li>
    <li class="list-group-item">Chance of Rain: ${(
      item.pop * 100
    ).toFixed(0)} % </li>
  </ul>
</div>`);
          }
        });
      });
    });
  });





})();
