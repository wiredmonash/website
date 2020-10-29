var hasVisitedLanding = false;

document.addEventListener("turbolinks:load", () => {
  const landingMessage = document.getElementsByClassName("landing-message")[0];
  if (!landingMessage) return;
  // We know we're on the landing page
  if (hasVisitedLanding) {
    landingMessage.classList.add("no-anim");
    console.debug("Not initial load: landing message animations disabled");
  } else {
    hasVisitedLanding = true;
  }
});
