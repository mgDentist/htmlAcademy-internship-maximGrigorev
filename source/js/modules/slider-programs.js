import Swiper from 'swiper/bundle';

const initProgramsSlider = () => {

  const programsSlider = document.querySelector('[data-slider="programs-slider"]');
  const programsScrollbar = document.querySelector('[data-slider="programs-scrollbar"]');
  const programsBtnNext = document.querySelector('[data-slider="programs-slider-btn-next"]');
  const programsBtnPrev = document.querySelector('[data-slider="programs-slider-btn-prev"]');

  if (programsSlider) {
    new Swiper(programsSlider, {
      scrollbar: {
        el: programsScrollbar,
        hide: false,
        dragSize: 392,
      },
      navigation: {
        nextEl: programsBtnNext,
        prevEl: programsBtnPrev,
      },
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          allowTouchMove: true,
          scrollbar: {
            dragSize: 324,
          },
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },
    });
  }
};

export { initProgramsSlider };
