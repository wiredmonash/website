"use strict";

var didScroll = false;
var lastScrollY;
var mobileMenuIsOpen = false;
const delta = 5;
const getDarkOverlay = () => document.getElementById("dark-overlay");
const getMobileMenuUl = () => document.getElementById("mobile-menu__ul");
// Reset variables when changing pages
document.addEventListener("turbolinks:load", () => {
  didScroll = false;
  lastScrollY = null;
  mobileMenuIsOpen = false;
  // Block scroll on dark-overlay and the ul
  getMobileMenuUl().addEventListener("touchmove", preventDefaultScroll, {
    passive: false,
  });
  getDarkOverlay().addEventListener("touchmove", preventDefaultScroll, {
    passive: false,
  });
});

document.addEventListener(
  "scroll",
  () => {
    didScroll = true;
  },
  { passive: true }
);

setInterval(() => {
  if (didScroll) {
    hasScrolled();
  }
}, 250);

const preventDefaultScroll = (e) => e.preventDefault();

function handleMobileMenuInputClick() {
  mobileMenuIsOpen = !mobileMenuIsOpen;
}

// Adapted from https://jsfiddle.net/mariusc23/s6mLJ/31/
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
