var $, fill;

$ = require('jQuery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('Who are you?');

fill;
