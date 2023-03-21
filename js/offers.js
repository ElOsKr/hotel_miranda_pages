document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(){
    const swiperOffers = new Swiper('.swiper-offers',{
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

}