'use strict';

var mapBlock = document.querySelector('.map');
var mapContainer = document.querySelector('.map__container');

if (mapContainer) {
  mapBlock.classList.remove('map--no-js');

  var myMap = document.createElement('script');
  myMap.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBk6uBmJpjAaLIfkYjehWvMqWQktKwuESw&language=ru&callback=initMap';
  myMap.defer = true;
  myMap.async = true;
  myMap.type = 'text/javascript';

  window.initMap = function () {
    var map = new window.google.maps.Map(mapContainer, {
      center: {lat: 59.938635, lng: 30.323118},
      zoom: 15.5
    });
    return map;
  };
  document.head.appendChild(myMap);
}
