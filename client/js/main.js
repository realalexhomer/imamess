// Setup config for requirejs imports
require.config({
  waitSeconds: 0,
  baseUrl: "client/js/app",
  paths: {
    "underscore": "../lib/underscore",
    "backbone": "../lib/backbone",
    "jquery": "../lib/jquery"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    }    
  },
  urlArgs: "bust=" + (new Date()).getTime()
});

var App = (function (App) {
  return App;
} (App || {}));

/* Global sharing (only once necessary) */
window.App = App;


require([
  "jquery",
  "underscore",
  "backbone",
], function ($, _, Backbone) {

  require(["router"]);

});