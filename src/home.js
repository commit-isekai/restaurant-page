/* eslint linebreak-style: ["error", "windows"] */

export default function createHome() {
  const wrapper = document.querySelector('#content');
  const tabs = document.querySelectorAll('.navbar-menu .navbar-item');

  const hero = document.createElement('section');
  const heroBody = document.createElement('div');
  const container = document.createElement('div');
  const content = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('p');
  const menuButton = document.createElement('button');
  const menuButtonText = document.createElement('span');
  const menuButtonIcon = document.createElement('span');
  const icon = document.createElement('i');
  const image = document.createElement('figure');
  const imageCaption = document.createElement('figcaption');

  hero.classList.add('hero', 'is-fullheight-with-navbar', 'home-section');
  heroBody.classList.add('hero-body');
  container.classList.add('container', 'is-flex-desktop');
  content.classList.add('content', 'has-text-left-desktop');
  title.classList.add('title', 'is-spaced');
  subtitle.classList.add('subtitle');
  menuButton.classList.add('button', 'menu-button');
  menuButtonIcon.classList.add('icon');
  icon.classList.add('fas', 'fa-angle-double-right');
  image.classList.add('image', 'is-hidden-touch');

  title.innerText = 'tired of generic food? try out space food!';
  subtitle.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel';
  menuButtonText.innerText = 'menu';
  imageCaption.innerHTML = 'Photo by <a href="https://unsplash.com/@thevoncomplex" target="_blank">Mike Von</a> on Unsplash';

  hero.appendChild(heroBody);
  heroBody.appendChild(container);
  container.appendChild(content);
  content.appendChild(title);
  content.appendChild(subtitle);
  content.appendChild(menuButton);
  menuButton.appendChild(menuButtonText);
  menuButton.appendChild(menuButtonIcon);
  menuButtonIcon.appendChild(icon);
  container.appendChild(image);
  image.appendChild(imageCaption);

  menuButton.addEventListener('click', () => {
    wrapper.innerHTML = '';
    tabs[2].click();
  });

  wrapper.appendChild(hero);
}
