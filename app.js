let nav = document.querySelector(".nav");
let navList = document.querySelector(".nave-list")
let searchBar = document.querySelector(".search-bar")

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
    searchBar.classList.toggle("on")
});

document.querySelector(".search-icon").addEventListener("click", function(){
    searchBar.classList.add("search")
    searchBar.firstElementChild.focus()
    document.getElementsByTagName('body')[0].classList.add("blur")
})

searchBar.addEventListener("click", function(event){
    if(event.target.classList[0] === "search-bar"){
        this.classList.remove("search")
    }
})