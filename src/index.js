/* eslint linebreak-style: ["error", "windows"] */

import createHome from './home';
import createContact from './contact';
import createMenu from './menu';

window.addEventListener('load', () => {
  const wrapper = document.querySelector('#content');
  const tabs = document.querySelectorAll('.navbar-menu .navbar-item');
  const navburger = document.querySelector('.navbar-burger');
  const navbarItems = document.querySelector('#tabs');

  const deactvateAllTabs = () => {
    tabs.forEach((tab) => {
      tab.classList.remove('is-active');
    });
  };
  const toggleNavbar = () => {
    navburger.classList.toggle('is-active');
    navbarItems.classList.toggle('is-active');
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      deactvateAllTabs();
      tab.classList.add('is-active');

      if (tabs[0].classList.contains('is-active')) {
        wrapper.innerHTML = '';
        createHome();
      } else if (tabs[1].classList.contains('is-active')) {
        wrapper.innerHTML = '';
        createContact();
      } else {
        wrapper.innerHTML = '';
        createMenu();
      }
    });
  });

  tabs[0].click();

  navburger.addEventListener('click', toggleNavbar);
});
