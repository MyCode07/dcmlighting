import Swiper from 'swiper';
import { Thumbs, FreeMode } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');

        if (slider.closest('.single-product')) {
            const thumbs = new Swiper('.slider-small', {
                modules: [
                    FreeMode
                ],
                freeMode: true,
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                spaceBetween: 10,
            });

            new Swiper('.slider-big', {
                modules: [
                    Thumbs
                ],
                spaceBetween: 10,
                slidesPerView: 1,
                thumbs: {
                    swiper: thumbs,
                },
            });
        }
    })
}


