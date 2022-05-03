function initMap() {
    let uluru = { lat: -25.344, lng: 131.031 };
}



// The location of Uluru
let uluru = { lat: -25.344, lng: 131.031 };
// The map, centered at Uluru
let map = new google.maps.Map(document.getElementById("map"), {

  // Zoom 0 has the whole globe  
  zoom: 4,

  // The center property tells the API where to center the map.
  center: uluru,
});

// The marker, positioned at Uluru
let marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

// google.maps.Map(mapDiv[opts]);

// google,maps.Marker([opts]);

