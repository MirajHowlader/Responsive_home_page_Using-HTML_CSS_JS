/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    } )
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    } )
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav-link');

const linikAction = () =>{
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linikAction))

/*=============== SWIPER WACTHES ===============*/
const swiperWatches = new Swiper('.home-swiper', {
    loop:true,
    spaceBetween:32,
    grabCursor:true,
    effect:'creative',
    creativeEffect:{
        prev:{
            translate:[-100, 0, -500],
            rotate:[0,0,15],
            opacity:0,

        },
        next:{
            translate:[100, 0, -500],
            rotate:[0,0, -15],
            opacity:0,

        },
    },


    pagination:{
        el:'swiper-pagination',
        clickable:true,
    },
})


/*=============== GSAP ANIMATION ===============*/
