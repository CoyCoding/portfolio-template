'use strict';

requirejs.config({
  //By default load any module IDs from js
  baseUrl: 'js',
  paths: {}
});

$(document).ready(function () {
  // Start the main app logic.
  requirejs(['buttons'], function (buttons) {
    buttons.init();
  });
});