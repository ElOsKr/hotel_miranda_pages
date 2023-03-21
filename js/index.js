document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(){
    const swiper = new Swiper('.swiper',{
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay:{
            delay: 4000,
        }
    })

    const swiperFeatures = new Swiper('.swiper-features',{
        direction: 'horizontal',
        loop: true,

        pagination:{
            el: '.swiper-pagination',
            type: 'bullets',
        },

        autoplay:{
            delay: 4000,
        }
    })

    const swiperMenu = new Swiper('.swiper-menu',{
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay:{
            delay: 4000,
        }
    })

    const swiperFoodImg = new Swiper('.swiper-foodImg',{
        direction: 'horizontal',
        loop: true,

        pagination:{
            el: '.swiper-pagination',
            type: 'bullets',
        },

        autoplay:{
            delay: 4000,
        }
    })

    const swiperFeaturesAbout = new Swiper('.swiper-about__features',{
        direction: 'horizontal',
        loop: true,

        pagination:{
            el: '.swiper-pagination',
            type: 'bullets',
        },

        autoplay:{
            delay: 4000,
        }
    })

}