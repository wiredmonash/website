"use strict";
// Adapted from https://jsfiddle.net/mariusc23/s6mLJ/31/

var didScroll = false;
var lastScrollY;
var delta = 5;
var header = document.getElementById("site-header");
var headerHeight = header.offsetHeight;

document.addEventListener("scroll", () => {
  didScroll = true;
});

setInterval(() => {
  if (didScroll) {
    hasScrolled();
  }
}, 250);

function hasScrolled() {
  if (typeof lastScrollY !== "number") {
    lastScrollY = window.scrollY;
    return;
  }
  let scrollY = window.scrollY;

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollY - scrollY) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (scrollY > lastScrollY && scrollY > headerHeight) {
    // First scroll up after refresh OR Scroll Down
    // header.classList.remove("slideDown");
    header.classList.add("header-hidden");
  } else if (scrollY < lastScrollY) {
    // Scroll up
    header.classList.remove("header-hidden");
    // header.classList.add("slideDown");
  }

  lastScrollY = scrollY;
}
