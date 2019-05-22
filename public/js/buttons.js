'use strict';

define(['navMenuBtn', 'readMoreLessBtn'], function (navMenuBtn, readMoreLessBtn) {
  return {
    init: function init() {
      navMenuBtn.init();
      readMoreLessBtn.init();
    }
  };
});