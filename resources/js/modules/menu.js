(function () {

  const selectors = {
    btn: '[data-btn-menu]',
    menu: '[data-menu]',
    subline: '[data-subline]',
    content: '[data-content]',
  };

  const init = () => {
    const btn = document.querySelector(selectors.btn);
    btn.addEventListener('click', toggle);
  };

  const toggle = () => {
    const menu = document.querySelector(selectors.menu);
    menu.classList.toggle('is-visible');

    const btn = document.querySelector(selectors.btn);
    btn.classList.toggle('is-active');

    const subline = document.querySelector(selectors.subline);
    if (subline) {
      subline.classList.toggle('!hidden');
    }

    const content = document.querySelector(selectors.content);
    if (content) {
      content.classList.toggle('is-hidden');
    }
  };

  init();
  
})();