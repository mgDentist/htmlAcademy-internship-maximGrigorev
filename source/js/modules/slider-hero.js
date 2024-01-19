import Swiper from 'swiper/bundle';
import 'swiper/css';

const initHeroSlider = () => {

  const heroSlider = document.querySelector('[data-slider="hero-slider"]');
  const heroPagination = document.querySelector('[data-slider="hero-slider-pgn"]');

  if (heroSlider) {
    new Swiper(heroSlider, {

      pagination: {
        el: heroPagination,
        clickable: true,
      },

      // autoplay: {
      //   delay: 3000,
      // },

      autoHeight: true,
      loop: true,
      breakpoints: {
        1440: {
          allowTouchMove: true,
        },

        768: {
          allowTouchMove: true,
          autoplay: false,
        },
      },
    });
  }
};

export { initHeroSlider };
