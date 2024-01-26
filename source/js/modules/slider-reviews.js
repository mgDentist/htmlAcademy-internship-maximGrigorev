import Swiper from 'swiper/bundle';
// import 'swiper/css';

const initReviewsSlider = () => {

  const reviewsSlider = document.querySelector('[data-slider="reviews-slider"]');
  // const reviewsPagination = document.querySelector('[data-slider="reviews-slider-pgn"]');
  const reviewsScrollbar = document.querySelector('[data-slider="reviews-scrollbar"]');
  const reviewsBtnNext = document.querySelector('[data-slider="reviews-slider-btn-next"]');
  const reviewsBtnPrev = document.querySelector('[data-slider="reviews-slider-btn-prev"]');

  if (reviewsSlider) {
    new Swiper(reviewsSlider, {

      // pagination: {
      //   el: reviewsPagination,
      //   clickable: true,
      // },
      // initialSlide: 0,
      navigation: {
        nextEl: reviewsBtnNext,
        prevEl: reviewsBtnPrev,
      },

      // autoplay: {
      //   delay: 3000,
      // },

      // autoHeight: true,
      loop: false,
      scrollbar: {
        el: reviewsScrollbar,
        hide: false,
        dragSize: 392,
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          scrollbar: {
            dragSize: 324,
          }
        },
        1440: {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
      },
    });
  }
};

export { initReviewsSlider };
