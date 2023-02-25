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


// modal 



function showModal(){
  const modal = document.querySelector(".modal-container");
const projects = document.querySelector(".projects");
const closeBtn = document.querySelector(".close-btn");
if (modal.classList.contains("hide")){
  modal.classList.remove("hide")
  projects.classList.add("hide");
  closeBtn.addEventListener("click", function(){
    modal.classList.add("hide")
    projects.classList.remove("hide");
  })
  
}};
