/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-plusplus: "error" */

export default function createMenu() {
  const wrapper = document.querySelector('#content');
  const menuItems = 5;

  const hero = document.createElement('section');
  const heroBody = document.createElement('div');
  const container = document.createElement('div');
  const content = document.createElement('div');
  const columns = document.createElement('div');
  const pageTitle = document.createElement('h1');

  hero.classList.add('hero', 'is-fullheight-with-navbar', 'menu-section');
  heroBody.classList.add('hero-body');
  container.classList.add('container');
  content.classList.add('content', 'has-text-left-desktop');
  columns.classList.add('columns', 'is-multiline');
  pageTitle.classList.add('title');

  hero.appendChild(heroBody);
  heroBody.appendChild(container);
  container.appendChild(content);
  content.appendChild(pageTitle);

  pageTitle.innerText = 'our offerings';

  for (let i = 0; i < menuItems; i += 1) {
    const column = document.createElement('div');
    const image = document.createElement('div');
    const imageCaption = document.createElement('p');
    const imageTitle = document.createElement('h1');
    const imageSubtitle = document.createElement('small');

    column.classList.add('column', 'is-half-tablet', 'is-one-third-desktop', 'has-text-left-desktop');
    image.classList.add('image', `img-${i + 1}`);
    // image.classList.add(`img-${i + 1}`);
    imageCaption.classList.add('image-caption');
    imageTitle.classList.add('title');
    imageSubtitle.classList.add('subtitle');

    imageSubtitle.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.';

    columns.appendChild(column);
    column.appendChild(image);
    column.appendChild(imageCaption);
    imageCaption.appendChild(imageTitle);
    imageCaption.appendChild(imageTitle);
    imageCaption.appendChild(imageSubtitle);
    container.appendChild(columns);


    switch (i) {
      case 0:
        imageTitle.innerText = 'space burger';
        break;
      case 1:
        imageTitle.innerText = 'space pizza';
        break;
      case 2:
        imageTitle.innerText = 'space ramen';
        break;
      case 3:
        imageTitle.innerText = 'space salad?';
        break;
      case 4:
        imageTitle.innerText = 'space pancake';
        break;

      default:
        console.log('error?');
        break;
    }
  }

  wrapper.appendChild(hero);
}
