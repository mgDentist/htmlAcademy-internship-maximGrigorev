// https://swiperjs.com/get-started#installation
// import Swiper from 'swiper';
// import {Navigation, Pagination} from 'swiper/modules';
// import 'swiper/css';

import { scrollPage } from './modules/scroll-header';
import { navOpener } from './modules/burger';
import { initAccordions } from './vendor/accordion/init-accordion';
import { initHeroSlider } from './modules/slider-hero';


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

  // Modules
  // ---------------------------------
  scrollPage();
  navOpener();
  initHeroSlider();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initModals();
    // const form = new Form();
    // window.form = form;
    // form.init();
    // initTabs();
    initAccordions();
  });
});
