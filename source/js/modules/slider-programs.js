import Swiper from 'swiper/bundle';
// import 'swiper/css';

const initProgramsSlider = () => {

  const programsSlider = document.querySelector('[data-slider="programs-slider"]');
  const programsPagination = document.querySelector('[data-slider="programs-slider-pgn"]');
  const programsBtnNext = document.querySelector('[data-slider="programs-slider-btn-next"]');
  const programsBtnPrev = document.querySelector('[data-slider="programs-slider-btn-prev"]');

  if (programsSlider) {
    new Swiper(programsSlider, {

      pagination: {
        el: programsPagination,
        clickable: true,
      },
      initialSlide: 0,
      navigation: {
        nextEl: programsBtnNext,
        prevEl: programsBtnPrev,
      },

      // autoplay: {
      //   delay: 3000,
      // },

      autoHeight: true,
      // loop: true,
      breakpoints: {
        1440: {
          allowTouchMove: true,
          slidesPerView: 3,
          spaceBetween: 32,
        },

        768: {
          allowTouchMove: true,
          autoplay: false,
          slidesPerView: 2,
          spaceBetween: 30,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        }
      },
    });
  }
};

export { initProgramsSlider };
