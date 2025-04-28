import Swiper from 'swiper';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';

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



        if (slider.closest('.single-product')) {
            const thumbs = new Swiper('.slider-small', {
                modules: [
                    FreeMode
                ],
                freeMode: true,
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                spaceBetween: 8,
            });

            new Swiper('.slider-big', {
                modules: [
                    Thumbs, Navigation
                ],
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                spaceBetween: 10,
                slidesPerView: 1,
                thumbs: {
                    swiper: thumbs,
                },
            });
        }

        if (slider.closest('.related')) {
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


