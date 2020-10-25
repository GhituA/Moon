'use strict';

(function () {
  var navList = document.querySelector('.page-header__container');
  var navBar = document.querySelector('.main-nav__bar');
  var navBtn = document.querySelector('.main-nav__toggle');
  var siteList = document.querySelector('.site-list');

  var setMainNavActive = function () {
    navBtn.addEventListener('click', function () {
      navList.classList.toggle('page-header__container--js');
      navBtn.classList.toggle('main-nav__toggle--open');
      siteList.classList.toggle('site-list--js');
      navBar.classList.toggle('main-nav__bar--open');
    });

    navList.classList.add('page-header__container--js');
    navBtn.classList.remove('main-nav__toggle--hidden');
  };

  setMainNavActive();
})();
