let nav = document.querySelector(".nav");
let navList = document.querySelector(".nave-list")

window.addEventListener("scroll", function(){
    if(window.scrollY >= 100){
        nav.classList.add("active")
    }else {
        nav.classList.remove("active")
    }
})

document.getElementById("nav-icon").addEventListener("click", function() {
    this.classList.toggle("open");
    nav.classList.toggle("small")
    navList.classList.toggle("small")
});