const menu = document.getElementById("menu")
const paragraphs = document.querySelectorAll("p")
const logo = document.querySelector("#logo")
const avatar = document.querySelector("#avatar")
const sideBar = document.querySelector("#sideBar")

menu.addEventListener("click", function(){
    paragraphs.forEach(paragraph => paragraph.classList.toggle("hidden"))
    logo.classList.toggle("hidden")
    avatar.classList.toggle("hidden")
    sideBar.classList.toggle("sideBarClose")
    
    let hidden = false
    logo.classList.forEach(cls => {
        if(cls == "hidden"){
            hidden = true
        }
    })
    if(hidden){
        sideBar.style.width = "56px"
    } else {
        sideBar.style.width = "250px"
    }
})