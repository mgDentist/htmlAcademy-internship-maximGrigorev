import Swiper from 'swiper/bundle';
import 'swiper/css';

const initHeroSlider = () => {

  const heroSlider = document.querySelector('[data-slider="hero-slider"]');

  if (heroSlider) {
    new Swiper(heroSlider, {

      pagination: {
        el: '.swiper-slide-active .hero__pagination',
        clickable: true,
      },
      on: {
        slideChangeTransitionStart: function () {
          this.pagination.init();
          this.pagination.render();
          this.pagination.update();
        }
      },
      // autoplay: {
      //   delay: 3000,
      // },
      autoHeight: true,
      loop: true,
      breakpoints: {
        1440: {
          allowTouchMove: false,
        },
        768: {
          allowTouchMove: true,
        },
        320: {
          allowTouchMove: true,
        },
      },
    });
  }
};

export { initHeroSlider };
