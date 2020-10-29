'use strict';

(function () {
  var pageContainer = document.querySelector('.page-header');
  var navBar = document.querySelector('.menu-bar');
  var navBtn = document.querySelector('.menu-bar__toggle');
  var siteList = document.querySelector('.main-nav__list');
  var navLinks = document.querySelectorAll('.main-nav__link');
  var mapBlock = document.querySelector('.map');
  var mapContainer = document.querySelector('.map__container');

  /*  JS menu  */

  var onMenuOpen = function () {
    pageContainer.classList.remove('page-header--js');
    navBtn.classList.add('menu-bar__toggle--open');
    siteList.classList.add('main-nav__list--js');
    navBar.classList.remove('menu-bar--open');
  };

  var onMenuClose = function () {
    pageContainer.classList.add('page-header--js');
    navBtn.classList.remove('menu-bar__toggle--open');
    siteList.classList.remove('main-nav__list--js');
    navBar.classList.add('menu-bar--open');

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].removeEventListener('click', onMenuClose);
    }
  };

  var setMainNavActive = function () {
    if (pageContainer) {
      pageContainer.classList.add('page-header--js');
    }

    if (navBtn) {
      navBtn.classList.remove('menu-bar__toggle--hidden');
      navBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (navBtn.classList.contains('menu-bar__toggle--open')) {
          onMenuClose();
        } else {
          onMenuOpen();
          if (siteList.classList.contains('main-nav__list--js') && navLinks.length > 0) {
            for (var i = 0; i < navLinks.length; i++) {
              navLinks[i].addEventListener('click', onMenuClose);
            }
          }
        }
      });
    }
  };


  /*  Map  */

  if (mapContainer) {
    mapBlock.classList.remove('map--no-js');

    var myMap = document.createElement('script');
    myMap.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBk6uBmJpjAaLIfkYjehWvMqWQktKwuESw&language=ru&callback=initMap";
    myMap.defer = true;

    window.initMap = function () {
      var map = new google.maps.Map(mapContainer, {
        center: {lat: 59.938635, lng: 30.323118},
        zoom: 15.5
      });
    }
      document.head.appendChild(myMap);
  }

  setMainNavActive();
})();
