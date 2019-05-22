'use strict';

define(function () {

  return {
    init: function init() {
      var readMoreBtn = $('.read-more-btn');
      var readLessBtn = $('.read-less-btn');

      readMoreBtn.click(function () {
        $(this).toggle();
        $(this).siblings('.more').toggle();
      });

      readLessBtn.click(function () {
        $(this).parent().toggle();
        $(this).parent().siblings('.read-more-btn').toggle();
      });
    }
  };
});