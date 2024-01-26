import Swiper from 'swiper/bundle';
// import 'swiper/css';

const initProgramsSlider = () => {

  const programsSlider = document.querySelector('[data-slider="programs-slider"]');
  // const programsPagination = document.querySelector('[data-slider="programs-slider-pgn"]');
  const programsScrollbar = document.querySelector('[data-slider="programs-scrollbar"]');
  const programsBtnNext = document.querySelector('[data-slider="programs-slider-btn-next"]');
  const programsBtnPrev = document.querySelector('[data-slider="programs-slider-btn-prev"]');

  if (programsSlider) {
    new Swiper(programsSlider, {

      // pagination: {
      //   el: programsPagination,
      //   clickable: true,
      // },
      scrollbar: {
        el: programsScrollbar,
        hide: false,
        dragSize: 392,
      },
      // initialSlide: 0,
      navigation: {
        nextEl: programsBtnNext,
        prevEl: programsBtnPrev,
      },

      // autoplay: {
      //   delay: 3000,
      // },

      // autoHeight: true,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 3,
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
