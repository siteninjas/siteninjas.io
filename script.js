var prevScrollPos = window.scrollY;
var header = document.getElementById("header");

window.addEventListener("scroll", function() {
  var currentScrollPos = window.scrollY;
  
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
