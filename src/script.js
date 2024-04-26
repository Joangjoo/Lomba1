const toogleButton = document.querySelector(".toogleButton")
const toogleMenu = document.querySelector(".navigation-menu")

toogleButton.addEventListener("click", () =>{
    toogleMenu.classList.toggle("hidden")
})

const navbar = document.querySelector("nav")
const list = document.querySelector("ul")

function scrollTop(){
    if(window.scrollY > 10){
        navbar.classList.add("bg-merah")
        navbar.classList.remove("bg-transparent")
    }
    else{
        navbar.classList.remove("bg-merah")
        navbar.classList.add("bg-transparent")
    }
}

window.addEventListener("scroll",scrollTop)

