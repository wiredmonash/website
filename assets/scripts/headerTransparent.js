"use strict";

var didScroll = false;
var lastScrollY;
var delta = 5;
var header = document.getElementById("site-header");
var headerHeight = header.offsetHeight;

window.addEventListener("load", () => {
  if (window.scrollY > 0) {
    header.classList.remove("header-transparent");
  }
});

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

  // If at top, make transparent
  if (scrollY === 0) {
    header.classList.add("header-transparent");
  } else {
    header.classList.remove("header-transparent");
  }

  lastScrollY = scrollY;
}
