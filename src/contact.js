/* eslint linebreak-style: ["error", "windows"] */

export default function createContact() {
  const wrapper = document.querySelector('#content');

  const hero = document.createElement('section');
  const heroBody = document.createElement('div');
  const container = document.createElement('div');
  const content = document.createElement('div');
  const openingPart = document.createElement('div');
  const contactPart = document.createElement('div');
  const loactionPart = document.createElement('div');
  const title = document.createElement('h1');
  const subtitle = document.createElement('p');

  hero.classList.add('hero', 'is-fullheight-with-navbar', 'contact-section');
  heroBody.classList.add('hero-body');
  container.classList.add('container');
  content.classList.add('content', 'has-text-left-desktop');
  openingPart.classList.add('opening-hours');
  contactPart.classList.add('contact-us');
  loactionPart.classList.add('location');
  title.classList.add('title', 'is-spaced');
  subtitle.classList.add('subtitle');

  hero.appendChild(heroBody);
  heroBody.appendChild(container);
  container.appendChild(content);
  content.appendChild(openingPart);
  content.appendChild(contactPart);
  content.appendChild(loactionPart);
  openingPart.innerHTML = `<h1 class="title is-spaced">opening hours</h1>
              <p class="subtitle">
                Mon–Wed 7–11 <br>
                Thu–Sat 3–12 <br>
                Sun 2–10
              </p>`;
  contactPart.innerHTML = `<h1 class="title is-spaced">contact us</h1>
              <p class="subtitle">
                2079 7897 0336 <br>
                example@gmail.com
              </p>`;
  loactionPart.innerHTML = `<h1 class="title is-spaced">contact us</h1>
              <p class="subtitle">
                2079 7897 0336 <br>
                example@gmail.com
              </p>`;

  wrapper.appendChild(hero);
}
