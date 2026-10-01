const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}

if (navClose) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

document.querySelectorAll('.nav__link, .nav__contact').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY >= 40);
});

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  sections.forEach(section => {
    const height = section.offsetHeight;
    const top = section.offsetTop - 120;
    const link = document.querySelector(`.nav__link[href="#${section.id}"]`);
    if (link) {
      link.classList.toggle('active-link', y > top && y <= top + height);
    }
  });
});
