	define([
  'jquery',
], function ($) {

  /*global Born, require */
  "use strict";

  var $page;

  $page = $("#page-name");

  if ($page.hasClass("index")) {
    require(['pages/home']);
  } else if ($page.hasClass('not-index')) {
    require (['pages/not-index']);
  }

});