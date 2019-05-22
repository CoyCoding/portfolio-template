'use strict';

define(['utils'], function (utils) {

  return {
    initMobileMenu: function initMobileMenu() {
      var mobileMenuBtn = $('.mobile-icon');
      var navMenu = $('.nav-menu');
      var navLinks = $('.navlink');

      //size the menu will always be visable;
      var moblieBreakPoint = 991;

      //menu show hide on click;
      mobileMenuBtn.click(function () {
        if (navMenu[0].classList.contains('active')) {
          navMenu.removeClass('active');
          navMenu.addClass('hide');
        } else {
          navMenu.removeClass('hide');
          navMenu.addClass('active');
        }
      });

      navLinks.click(function () {
        if (utils.getWindowWidth() < moblieBreakPoint) {
          navMenu.removeClass('active');
          navMenu.addClass('hide');
        }
      });

      //menu always visable conditional
      window.addEventListener('resize', function () {
        if (utils.getWindowWidth() > moblieBreakPoint && (navMenu[0].classList.contains('hide') || navMenu[0].classList.contains('active'))) {

          console.log(utils.getWindowWidth());
          navMenu.removeClass('hide');
          navMenu.removeClass('active');
        }
      });
    }
  };
});