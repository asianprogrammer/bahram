let nav = document.querySelector(".nav");

window.addEventListener("scroll", function(){
    if(window.scrollY >= 100){
        nav.classList.add("active")
    }else {
        nav.classList.remove("active")
    }
})