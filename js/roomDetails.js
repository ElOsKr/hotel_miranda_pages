document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(){
    const swiperRelatedRooms = new Swiper('.swiper-relatedRooms',{
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

}