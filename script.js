//initialize Google Maps
function initMap() {
  var location = {lat:  43.64393, lng: -79.378189};
  var map = new google.maps.Map(document.getElementById('map1'), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
function initMap() {
  var location = {lat:  43.727182, lng: -79.450852};
  var map = new google.maps.Map(document.getElementById('map2'), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
