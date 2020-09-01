var map;
function initMap() {
  // Constructor creates a new map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7625587, lng: -73.9733541 },
    zoom: 15,
  });
}