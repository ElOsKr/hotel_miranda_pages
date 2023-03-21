document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(){
    const swiperFeaturesAbout = new Swiper('.swiper-about',{
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