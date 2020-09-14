
function initMap() {
  var center = {lat: 40.7608111, lng: -73.9743554};
  
  var locations = [
    ['Belvista Hotel<br>\
    480 Park Ave, New York, NY 10022, United States <br>\
   <a href="https://www.belvistahotels.com/newyork/">Website</a>',40.7628425, -73.9715092],
    ['New York Sports Club<br>\
    502 Park Ave New York NY 10022<br>\
   <a href="https://www.newyorksportsclubs.com/clubs/59th-park">Website</a>',40.7617002, -73.9773837],
    ['Velocity Sports NYC <br>\
    133 E 58th St 6th floor, New York, NY 10022<br>\
    <a href="https://goo.gl/maps/eUmyNuMyYNN2">Website</a>', 40.762066, -73.9710607],
    ['Lift Gym<br>\
    139 E 57th St New York NY 10022<br>\
    <a href="http://liftgym.com/">Website</a>', 40.7576454,-73.9722553 ],
    ['Vital Yoga<br>\
    212 E 57th St,  New York NY 10022<br>\
   <a href="https://halevylife.com/vital-yoga-nyc/">Website</a>', 40.7599039, -73.9693033]
  ];
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: center
  });
var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
google.maps.event.addListener(marker,'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}











// let map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: {
//       lat: 40.7623515,
//       lng: -73.9718842,
//     },
//     zoom: 17,
//     mapTypeId: "roadmap",
//   });

//   let marker = new google.maps.Marker({
//     position: {
//       lat: 40.7623515,
//       lng: -73.9718842,
//     },
//     map: map,
//     title: "Your Location",
//   });
//   let infoWindow = new google.maps.InfoWindow({
//     content: "<h2>Your Hotel Location!</h2>",
//   });

//   marker.addListener("click", function () {
//     infoWindow.open(map, marker);
//   });
// }

// let map;
// function initMap() {
// 	map = new google.maps.Map( document.getElementById( 'map' ), {
// 		center: {
// 			lat: 40.7625587,
// 			lng: -73.9733541
// 		},
// 		zoom: 14
//     });


//  let marker = new google.maps.Marker({
// 	position: {
// 		lat: 40.7625587,
// 		lng: -73.9733541
// 	},
// 	map: map,
// 	title: '<h2>Your Hotel Location'</h2>
// });
// let infoWindow = new google.maps.InfoWindow ({
//     content: 'Vista Gym Club NY'
// });
// marker.addListener('click',function(){
//   infoWindow.open( map,marker);  
// });
// }
