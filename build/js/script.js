'use strict';

(function () {
  var page = document.querySelector('.page');
  var pageContainer = page.querySelector('.page-header');
  var navBar = page.querySelector('.menu-bar');
  var navBtn = page.querySelector('.menu-bar__toggle');
  var navLogo = page.querySelector('.menu-bar__logo');
  var siteList = page.querySelector('.main-nav__list');
  var navLinks = page.querySelectorAll('.main-nav__link');
  var mapBlock = page.querySelector('.map');
  var mapContainer = page.querySelector('.map__container');

  /*  JS menu  */

  var onMenuOpen = function () {
    removeClassFromElement(pageContainer, 'page-header--js');
    removeClassFromElement(navBar, 'menu-bar--closed');
    addClassToElement(navLogo, 'menu-bar__logo--hidden');
    addClassToElement(navBtn, 'menu-bar__toggle--open');
    addClassToElement(siteList, 'main-nav__list--js');
    addClassToElement(navBar, 'menu-bar--open');
    addClassToElement(page, 'page--lock');
  };

  var addClassToElement = function (element, className) {
    element.classList.add(className);
  };

  var removeClassFromElement = function (element, className) {
    element.classList.remove(className);
  };

  var onMenuClose = function () {
    removeClassFromElement(navLogo, 'menu-bar__logo--hidden');
    removeClassFromElement(page, 'page--lock');
    removeClassFromElement(navBtn, 'menu-bar__toggle--open');
    removeClassFromElement(siteList, 'main-nav__list--js');
    addClassToElement(pageContainer, 'page-header--js');
    addClassToElement(navBar, 'menu-bar--closed');

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].removeEventListener('click', onMenuClose);
    }
  };

  var setMainNavActive = function () {
    if (pageContainer) {
      addClassToElement(pageContainer, 'page-header--js');
    }

    if (navBtn) {
      removeClassFromElement(navBtn, 'menu-bar__toggle--hidden');
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
    removeClassFromElement(mapBlock, 'map--no-js');

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

  setMainNavActive();
})();
