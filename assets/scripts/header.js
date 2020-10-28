"use strict";
// Adapted from https://jsfiddle.net/mariusc23/s6mLJ/31/

var didScroll = false;
var lastScrollY;
var delta = 5;
var mobileMenuIsOpen = false;

document.addEventListener("scroll", () => {
  didScroll = true;
});

setInterval(() => {
  if (didScroll) {
    hasScrolled();
  }
}, 250);

function hasScrolled() {
  let header = document.getElementById("site-header");
  let headerHeight = header.offsetHeight;
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

  // If at top, make transparent
  if (pageTitle === "Home" && scrollY === 0) {
    header.classList.add("header-transparent");
  } else {
    header.classList.remove("header-transparent");
  }

  lastScrollY = scrollY;

  // Do not allow header to be hidden when mobileMenuIsOpen
  if (mobileMenuIsOpen) header.classList.remove("header-hidden");
}

function mobileMenuLockScroll() {
  document.body.classList.toggle("lock-scroll");
  mobileMenuIsOpen = !mobileMenuIsOpen;
}

document.addEventListener("DOMContentLoaded", () => {
  let darkOverlay = document.getElementById("dark-overlay");
  // Disable scroll when dark overlay is activated
  darkOverlay.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
    },
    false
  );
});
