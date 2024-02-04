export const scrollPage = () => {
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      document.querySelector('.header').style.transform = 'translateY(-100%)';
    } else {
      document.querySelector('.header').style.transform = 'translateY(0)';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }, false);
};
