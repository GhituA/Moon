'use strict';

(function () {
  var pageContainer = document.querySelector('.page-header');
  var navBar = document.querySelector('.menu-bar');
  var navBtn = document.querySelector('.menu-bar__toggle');
  var siteList = document.querySelector('.main-nav__list');
  var mapBlock = document.querySelector('.map');

  /*  JS menu  */

  var setMainNavActive = function () {
    navBtn.addEventListener('click', function () {
      pageContainer.classList.toggle('page-header--js');
      navBtn.classList.toggle('menu-bar__toggle--open');
      siteList.classList.toggle('main-nav__list--js');
      navBar.classList.toggle('menu-bar--open');
    });

    pageContainer.classList.add('page-header--js');
    navBtn.classList.remove('menu-bar__toggle--hidden');
  };

  /*  Map  */

  mapBlock.classList.remove('map--no-js');

  function initMap() {
    map = new google.maps.Map(document.getElementById('map__container'), {
      center: {lat: 59.938635, lng: 30.323118},
      zoom: 15.5
    });
  }

  setMainNavActive();
})();
