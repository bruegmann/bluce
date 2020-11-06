const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
prefersDarkScheme.addEventListener("change", () => {
    document.body.classList.remove("light-theme")
    document.body.classList.remove("dark-theme")
})

document.getElementById("toggle-themed").addEventListener("click", () => {
    document.querySelector("body").classList.toggle(prefersDarkScheme.matches ? "light-theme" : "dark-theme")
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