var $, fill;

$ = require('jQuery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('Something going on?');

fill;
