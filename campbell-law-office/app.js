'use strict';
// copyright year
var year = new Date().getFullYear();
var copyright = document.getElementById('copyright');
var copyrightDate = document.createTextNode(year);
copyright.appendChild(copyrightDate);

//rotate through images starting with a random image on page load
var counter = Math.floor(Math.random() * 8) + 1;
console.log(counter)
var images = document.getElementById('images');
images.setAttribute('src', 'img/clo' + counter + '.jpg');
setInterval(() => {
  counter++;
  if (counter > 8) counter = 1;
  images.setAttribute('src', 'img/clo' + counter + '.jpg');
}, 7000)
