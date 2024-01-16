// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { navOpener } from "./modules/burger";
import { initAccordions } from "./vendor/accordion/init-accordion";

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // iosVhFix();

  // Modules
  // ---------------------------------
  navOpener();


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
