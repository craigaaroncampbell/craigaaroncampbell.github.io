'use strict';
var counter = 1;
var img = document.getElementById('bg-img');

setInterval(function(){
  counter++;
  if (counter > 5) counter = 1;
  img.src = 'bg' + counter + '.jpg';
}, 3000);
