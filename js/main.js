//Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}
//nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})

//swiper slider
var swiper = new Swiper(".mySwiper",{
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});
//counter desing
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5248, 2500);
    counter("count3", 0, 2518, 3000);
    counter("count4", 100, 7632, 2500);
});

//our partner
var swiper = new Swiper(".our-partner",{
    slidesPerView:5,
    spaceBetween:30,
    loop:true,
    autoplay:{
        delay:1500,
    },
    breakpoints:{
        '991':{
            slidesPerView:5,
            spaceBetween:10,
        },
        '768':{
            slidesPerView:3,
            spaceBetween:10,
        },
        '320':{
            slidesPerView:2,
            spaceBetween:8,
        },
    },
});