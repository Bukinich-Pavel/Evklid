const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },  
});

let burger = document.querySelector('.btn-nav');
let menu = document.querySelector('.header__men');
let menuLinks = menu.querySelectorAll('.men__link');

burger.addEventListener('click', function () {
    burger.classList.toggle('btn-nav--active');
    menu.classList.toggle('header__men--active');
    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('btn-nav--active');
        menu.classList.remove('header__men--active');
        document.body.classList.remove('stop-scroll')
    })
})

let workinglinks = document.querySelectorAll('.working__link-step');
let workingDescrs = document.querySelectorAll('.woking-descr');
let workingTitle = document.querySelectorAll('.cards-title');
let workingImg = document.querySelectorAll('.working__right-card');

workinglinks.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        workinglinks.forEach(function(btn) { btn.classList.remove('working__link-step--active')});
        e.currentTarget.classList.add('working__link-step--active');

        workingTitle.forEach(function(title) { title.classList.remove('cards-title--active')});
        document.querySelector(`[data-target-title="${path}"`).classList.add('cards-title--active');

        workingDescrs.forEach(function(descr) { descr.classList.remove('woking-descr--active')});
        document.querySelector(`[data-target-descr="${path}"`).classList.add('woking-descr--active');
    
        workingImg.forEach(function(img) { img.classList.remove('working__right-card--active')});
        document.querySelector(`[data-target-img="${path}"`).classList.add('working__right-card--active');
    })
})


let btnSearch = document.querySelector('.nav__link-svg');
let fieldSearch = document.querySelector('.header__search');
let btnSearchClose = document.querySelectorAll('.search-btn-close');

btnSearch.addEventListener('click', function(e) {
    fieldSearch.classList.add('header__search--active');
})

btnSearchClose.forEach(function(element) {
    element.addEventListener('click', function(e) {
        fieldSearch.classList.remove('header__search--active');
    })
})
