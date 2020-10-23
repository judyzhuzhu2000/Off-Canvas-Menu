//chose hamburger elements//
const navTriggleEl = document.querySelector(".hamburger");
// chose nav elements//
const navEl = document.querySelector(".nav");
// chose all spans elements//
const hamburgerBarsEl = document.querySelectorAll("span");
// chose content elements//
const contentEl = document.querySelector(".content");


function toggleNav () {
    navTriggleEl.addEventListener("click", function (){
       navEl.classList.toggle("open");
       contentEl.classList.toggle("shift");
       animateHamburgerbars();//moved from the bottom function

    })

}

function animateHamburgerbars() {
    for(let item of hamburgerBarsEl) {
        item.classList.toggle("change");
    }
}
//animateHamburgerbars();

toggleNav();