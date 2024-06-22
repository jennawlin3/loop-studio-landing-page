const $hamburgerBtn = document.querySelector(".hamburger");
const $menuMobile = document.querySelector(".nav-mobile_container");
const $closeBtn = document.querySelector(".close");

$hamburgerBtn.addEventListener("click", e => {
    if(e) {
        $menuMobile.classList.remove("hide");
    }
})

$closeBtn.addEventListener("click", e => {
    $menuMobile.classList.add("hide");
})