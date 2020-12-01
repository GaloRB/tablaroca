/*  ----- menu mobile ----- */
let menuBurger = document.querySelector('#menu-burger');
let barras = document.querySelector('#barras');
let line1 = document.querySelector('#line-1');
let line2 = document.querySelector('#line-2');
let line3 = document.querySelector('#line-3');
let frameMenu = document.querySelector('#frame');
let navMobile = document.querySelector('.nav-mobile');
let hidde = document.querySelector('#hidden');
let logo = document.querySelector('#logo');
let li = document.querySelector('.li');

barras.addEventListener('click', () => {
    line1.classList.toggle('changeline-1');
    line2.classList.toggle('changeline-2');
    line3.classList.toggle('changeline-3');

    frameMenu.classList.toggle('frame-menu-active');
    menuBurger.classList.toggle('barra-menu-active');

});


li.addEventListener('click', () => {
    line1.classList.remove('changeline-1');
    line2.classList.remove('changeline-2');
    line3.classList.remove('changeline-3');

    frameMenu.classList.remove('frame-menu-active');
    menuBurger.classList.remove('barra-menu-active');
});





/*hidde.addEventListener('click', () => {
    line1.classList.toggle('changeline-1');
    line2.classList.toggle('changeline-2');
    line3.classList.toggle('changeline-3');
    navMobile.classList.toggle('active');

    logo.style.display = 'block'

});*/

// --------------  sticky menu mobile ------------//


let nav = document.querySelector('#nav');
let altura = nav.offsetTop;
let navHeight = nav.offsetHeight;
let body = document.querySelector('body');


window.addEventListener('scroll', () => {
    if (window.pageYOffset > altura) {
        menuBurger.classList.add('burger-menu-fixed');
        body.style.marginTop = navHeight + 'px';


    } else {
        menuBurger.classList.remove('burger-menu-fixed');
        body.style.marginTop = '0';
    }
});

// --------------  sticky menu desktop ------------//


let navDesktop = document.querySelector('#nav-desktop');
let alturaDesktop = navDesktop.offsetTop;
let navHeightDesktop = navDesktop.offsetHeight;



window.addEventListener('scroll', () => {
    if (window.pageYOffset > alturaDesktop) {
        navDesktop.classList.add('burger-menu-fixed');
        body.style.marginTop = navHeightDesktop + 'px';


    } else {
        navDesktop.classList.remove('burger-menu-fixed');
        body.style.marginTop = '0';
    }
});