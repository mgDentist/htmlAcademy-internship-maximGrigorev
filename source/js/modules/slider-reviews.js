import Swiper from 'swiper/bundle';
// import 'swiper/css';

const initReviewsSlider = () => {

  const reviewsSlider = document.querySelector('[data-slider="reviews-slider"]');
  const reviewsPagination = document.querySelector('[data-slider="reviews-slider-pgn"]');
  const reviewsBtnNext = document.querySelector('[data-slider="reviews-slider-btn-next"]');
  const reviewsBtnPrev = document.querySelector('[data-slider="reviews-slider-btn-prev"]');

  if (reviewsSlider) {
    new Swiper(reviewsSlider, {

      pagination: {
        el: reviewsPagination,
        clickable: true,
      },
      initialSlide: 0,
      navigation: {
        nextEl: reviewsBtnNext,
        prevEl: reviewsBtnPrev,
      },

      // autoplay: {
      //   delay: 3000,
      // },

      autoHeight: true,
      loop: false,
      breakpoints: {
        1440: {
          allowTouchMove: true,
          slidesPerView: 2,
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

export { initReviewsSlider };
