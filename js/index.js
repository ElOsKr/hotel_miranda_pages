document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(){
    const swiper = new Swiper('.swiper',{
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,

        breakpoints:{
            1000:{
                loop: false,
                slidesPerView: 3,
            }
        }
    })

    const swiperFeatures = new Swiper('.swiper-features',{
        direction: 'horizontal',
        loop: true,
        pagination:{
            el: '.swiper-pagination-features',
        },
    })

    const swiperMenu = new Swiper('.swiper-menu',{
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    const swiperFoodImg = new Swiper('.swiper-foodImg',{
        direction: 'horizontal',
        loop: true,
        pagination:{
            el: '.swiper-pagination',
        },
    })

}