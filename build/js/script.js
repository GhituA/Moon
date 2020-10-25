'use strict';

(function () {
  var pageContainer = document.querySelector('.page-header');
  var navBar = document.querySelector('.main-nav__bar');
  var navBtn = document.querySelector('.main-nav__toggle');
  var siteList = document.querySelector('.site-list');
  var mapBlock = document.querySelector('.map');

  /*  JS menu  */

  var setMainNavActive = function () {
    navBtn.addEventListener('click', function () {
      pageContainer.classList.toggle('page-header--js');
      navBtn.classList.toggle('main-nav__toggle--open');
      siteList.classList.toggle('site-list--js');
      navBar.classList.toggle('main-nav__bar--open');
    });

    pageContainer.classList.add('page-header--js');
    navBtn.classList.remove('main-nav__toggle--hidden');
  };

  /*  Map  */

  mapBlock.classList.remove('map--no-js');

  // var initMap = function () {
  //   var myMap = new google.maps.Map(document.querySelector('.map__container'), {
  //     zoom: 16,
  //     center: {lat: 59.938568, lng: 30.322747}
  //   });
  // };

  var map;

  function renderMap () {
    loadScript("https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap");
    window.initMap = this.initMap;
  }

  function initMap() {
    map = new google.maps.Map(document.getElementById('map__container'), {
      center: {lat: 59.938568, lng: 30.322747},
      zoom: 16
    });
  }

  setMainNavActive();
})();
