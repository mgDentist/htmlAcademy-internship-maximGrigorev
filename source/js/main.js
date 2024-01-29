// https://swiperjs.com/get-started#installation
// import Swiper from 'swiper';
// import {Navigation, Pagination} from 'swiper/modules';
// import 'swiper/css';

import { scrollPage } from './modules/scroll-header';
import { navOpener } from './modules/burger';
import { initAccordions } from './vendor/accordion/init-accordion';
import { initHeroSlider } from './modules/slider-hero';
import { initProgramsSlider } from './modules/slider-programs';
import { initReviewsSlider } from './modules/slider-reviews';
import { initNewsSlider } from './modules/slider-news';
import { newsTitleToggle } from './modules/news-titles-toggle';

import { CustomSelect } from './vendor/select/custom-select';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

  // Modules
  // ---------------------------------
  scrollPage();
  navOpener();
  initHeroSlider();
  initProgramsSlider();
  initReviewsSlider();
  initNewsSlider();
  newsTitleToggle();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initModals();
    // const form = new Form();
    // window.form = form;
    // form.init();
    // initTabs();
    initAccordions();

    const select = new CustomSelect();
    select.init();
  });
});
