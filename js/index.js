document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(){
    document.getElementById("openMenu").addEventListener("click",toggleMenu);
    document.getElementById("closeMenu").addEventListener("click",toggleMenu);

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

        // autoplay:{
        //     delay: 4000,
        // }
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

}

function toggleMenu(){
    document.getElementById("openMenu").classList.toggle("active");
    document.getElementById("closeMenu").classList.toggle("active");
    document.getElementsByClassName("header__content-menu")[0].classList.toggle("active");
}