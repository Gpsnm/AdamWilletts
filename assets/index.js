



// nav hamburger button

function responsive(){
    let navBar = document.querySelector(".navBar");
    if (navBar.className === "navBar"){
        navBar.className += "responsive";
    }else {
        navBar.className = "navBar";
    }

}