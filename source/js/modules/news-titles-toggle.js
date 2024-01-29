const newsTitleToggle = () => {
  const tabItems = document.querySelectorAll('[data-news="news-title"]');
  const tabList = document.querySelector('[data-news="news-titles"]');

  tabItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Применяем transform к контейнеру списка вкладок
      tabList.style.transform = `translateX(-${item.offsetWidth * index}px)`;

      // Обновляем класс активности
      tabItems.forEach((tab) => tab.classList.remove('is-active'));
      item.classList.add('is-active');
    });
  });
};

export { newsTitleToggle };
