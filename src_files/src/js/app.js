import * as flsFunctions from "./modules/functions.js"
import * as mask from "./modules/mask.js"
import * as num from "./modules/qual.js"
import * as modalButton from './modules/modalsent.js'
import * as alltechfilter from './modules/alltechfilter.js'




flsFunctions.isWebp()
num.scrolling()




import Swiper, {
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 800,
    loopedSlides: 3,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    watchOverflow: true,
    centeredSlides: true,
    initialSlide: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',

    },
    // Navigation arrows
    navigation: {
        nextEl: '.slider-btn__right',
        prevEl: '.slider-btn__left',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});