// nav hamburger button

// function changes class name on click of hamburger icon button to set the css class name to the responsive styles
function responsive() {
  let navBar = document.querySelector(".navBar");
  if (navBar.className === "navBar") {
    navBar.className += " responsive";
  } else {
    navBar.className = "navBar";
  }
}
