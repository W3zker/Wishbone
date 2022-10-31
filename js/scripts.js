$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: [ '', ' ' ],
    autoplay: false,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
});