const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');

    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('show');
      toggleButton.setAttribute('aria-expanded', menu.classList.contains('show'));
    });

    const submenuParents = document.querySelectorAll('.has-submenu');

    submenuParents.forEach(parent => {
      parent.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          parent.classList.toggle('open');
        }
      });
    });
