const desktopNavContainer = document.getElementById("desktopNavContainer");
const stickyBuffer = document.getElementById("stickyBuffer");
const desktopNavTop = desktopNavContainer.offsetTop;
const hamburgerIcon = document.getElementById("hamburgerIcon");
const mobileNavBar = document.querySelector(".mobileNavBar");

// Hamburger menu toggle
hamburgerIcon.onclick = function(){
    if(!hamburgerIcon.classList.contains("clickedIcon")){
        hamburgerIcon.classList.add("clickedIcon");
        mobileNavBar.style.display = "block"
    } else {
        hamburgerIcon.classList.remove("clickedIcon");
        mobileNavBar.style.display = "none"
    }
}

//sets stick navbar on scroll
window.onscroll = function() {
    setSticky();
}

//makes desktop navbar sticky when scrolling down
function setSticky() {
    if(window.pageYOffset > desktopNavTop) {
        desktopNavContainer.classList.add("sticky");
        stickyBuffer.classList.add("stickyBuffer");
    }else{
        desktopNavContainer.classList.remove("sticky");
        stickyBuffer.classList.remove("stickyBuffer");
    }
}



