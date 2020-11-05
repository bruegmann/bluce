// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";


document.getElementById("toggle-dark").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark")
})

const stylesheet = document.getElementById("stylesheet")
const title = document.getElementById("title")
const ownStyle = "assets/css/starter.css"

const toggleStylesheet = () => {
    if (stylesheet.getAttribute("href") === ownStyle) {
        stylesheet.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css")
        title.innerHTML = "Bootstrap"
    }
    else {
        stylesheet.setAttribute("href", ownStyle)
        title.innerHTML = "Bluce"
    }
}

document.getElementById("toggle-stylesheet").addEventListener("click", toggleStylesheet)

document.getElementById("show-test-components").addEventListener("click", () => {
    document.getElementById("test-components").classList.toggle("d-none")
})