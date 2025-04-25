import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        const prev = section.querySelector('.prev');
        const next = section.querySelector('.next');

        if (slider.closest('.clients')) {
            new Swiper(slider, {
                modules: [
                    Navigation
                ],
                spaceBetween: 16,
                slidesPerView: 4,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
            });
        }


        if (slider.closest('.reviews')) {
            new Swiper(slider, {
                modules: [
                    Navigation
                ],
                spaceBetween: 16,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                breakpoints: {
                    769: {
                        slidesPerView: 4,
                    },
                    300: {
                        slidesPerView: 2,
                    }
                }
            });
        }
    })
}


