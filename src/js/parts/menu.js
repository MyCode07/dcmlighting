import { lockPadding, unLockPadding } from '../utils/lockPadding.js';


const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');

if (burger) {

    burger.addEventListener('click', (e) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');

        if (burger.classList.contains('_active')) {
            lockPadding();
        }
        else {
            unLockPadding();
        }
    })
}
