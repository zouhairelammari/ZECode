let btnMenu = document.getElementById("btnMenu");
let NavLinks = document.querySelector(".links");

btnMenu.onclick = function (){
    btnMenu.classList.toggle("fa-times")
    NavLinks.classList.toggle("active")
}