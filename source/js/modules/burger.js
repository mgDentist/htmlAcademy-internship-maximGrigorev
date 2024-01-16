export const navOpener = () => {
  const burgerButton = document.querySelector('[data-button="burger-btn"]');
  const headerNav = document.querySelector('[data-element="header-nav"]');
  const overlay = document.querySelector('[data-burger="overlay"]');

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('is-open');
    headerNav.classList.toggle('is-open');
    overlay.classList.toggle('is-active');
  });

  const clickOutsideNav = (event) => {
    if (!headerNav.contains(event.target) && !burgerButton.contains(event.target)) {
      burgerButton.classList.remove('is-open');
      headerNav.classList.remove('is-open');
      overlay.classList.remove('is-active');
    }
  };

  document.addEventListener('click', clickOutsideNav);
};
