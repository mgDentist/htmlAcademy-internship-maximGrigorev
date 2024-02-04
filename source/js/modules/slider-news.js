import Swiper from 'swiper/bundle';

const initNewsSlider = () => {

  const newsSlider = document.querySelector('[data-slider="news-slider"]');
  const newsPagination = document.querySelector('[data-slider="news-slider-pgn"]');
  const newsBtnNext = document.querySelector('[data-slider="news-slider-btn-next"]');
  const newsBtnPrev = document.querySelector('[data-slider="news-slider-btn-prev"]');

  if (newsSlider) {
    new Swiper(newsSlider, {
      loop: false,
      navigation: {
        nextEl: newsBtnNext,
        prevEl: newsBtnPrev,
      },
      pagination: {
        el: newsPagination,
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 4,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      breakpoints: {
        1440: {
          slidesPerView: 'auto',
          slidesPerGroup: 2,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 30,
          grid: {
            rows: 2,
          },
        },
        320: {
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 20,
          grid: {
            rows: 2,
          },

          pagination: {
            dynamicBullets: true,
            dynamicMainBullets: 4,
          }
        },
      },
    });
  }
};

export { initNewsSlider };
