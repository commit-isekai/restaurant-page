/* eslint linebreak-style: ["error", "windows"] */


// self firing function
// eslint-disable-next-line func-names
(function () {
  const tabs = document.querySelectorAll('.navbar-menu .navbar-item');
  const tabsContent = document.querySelectorAll('.tab-content');
  const navburger = document.querySelector('.navbar-burger');
  const navbarItems = document.querySelector('#tabs');
  // const menuButton = document.querySelector('.menu-button');

  // de-activates all tabs except a special one
  const deactvateAllTabs = () => {
    tabs.forEach((tab) => {
      tab.classList.remove('is-active');
    });
  };

  // the tab content is display none if there is no is-active class
  // takes all the tab sections
  const hideTabsContent = () => {
    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove('is-active');
    });
  };

  // a function to get index of an element
  // returns the index of the tab pressed
  // so it can corelate with the section index
  const getIndex = (el) => [...el.parentElement.children].indexOf(el);

  // takes a tab and it knows by event listener
  // it needs the index so we can corelate the index of the button with the index of the section
  const activateTabsContent = (tab) => {
    tabsContent[getIndex(tab)].classList.add('is-active');
  };


  const toggleNavbar = () => {
    navburger.classList.toggle('is-active');
    navbarItems.classList.toggle('is-active');
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      deactvateAllTabs();
      hideTabsContent();
      tab.classList.add('is-active');
      activateTabsContent(tab);
    });
  });

  tabs[0].click();

  navburger.addEventListener('click', toggleNavbar);
  // menuButton.addEventListener('click', () => tabs[2].click());
}());
