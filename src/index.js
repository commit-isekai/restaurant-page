// self firing function
let tabsWithContent = (function() {
  let tabs = document.querySelectorAll(".navbar-menu .navbar-item");
  let tabsContent = document.querySelectorAll(".tab-content");
  let navburger = document.querySelector('.navbar-burger');
  let navbarItems = document.querySelector('#navbarItems')

  // de-activates all tabs except a special one
  let deactvateAllTabs = function() {
    tabs.forEach(function(tab) {
      tab.classList.remove("is-active");
    });
  };

  // the tab content is display none if there is no is-active class
  // takes all the tab sections
  let hideTabsContent = function() {
    tabsContent.forEach(function(tabContent) {
      tabContent.classList.remove("is-active");
    });
  };

  // takes a tab and it knows by event listener
  // it needs the index so we can corelate the index of the button with the index of the section
  let activateTabsContent = function(tab) {
    tabsContent[getIndex(tab)].classList.add("is-active");
  };

  // a function to get index of an element
    // returns the index of the tab pressed
    // so it can corelate with the section index
  let getIndex = function(el) {
      console.log(el.parentElement);
    return [...el.parentElement.children].indexOf(el);
  };

  let toggleNavbar = function () { 
    navburger.classList.toggle('is-active');
    navbarItems.classList.toggle('is-active');
  }

  tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
      deactvateAllTabs();
      hideTabsContent();
      tab.classList.add("is-active");
      activateTabsContent(tab);
    });
  });

  // tabs[0].click();

  navburger.addEventListener('click', toggleNavbar);
})();
