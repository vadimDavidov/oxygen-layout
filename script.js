'use strict';
// * Burger menu
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const menuBtn1 = document.querySelector('.menu__btn-1');
const menu1 = document.querySelector('.menu-1');
const menuBtn2 = document.querySelector('.menu__btn-2');
const menu2 = document.querySelector('.menu-2');
const menuList = document.querySelector('.header__menu-list');
const portfolioList = document.querySelector('.portfolio__nav-list');
const menuList2 = document.querySelector('.menu__list-2');
const sectionHeader = document.querySelector('.header');
const header = document.querySelector('.header');
const headerTop = document.querySelector('.header__top');

// * Lazy loading for some images
const lazyImages = document.querySelectorAll('img[data-src]');
const loadImages = (entries, observer) => {
  const entry = entries[0];
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  console.log(entry.target);
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};
const lazyImagesObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0.7,
});
lazyImages.forEach(image => lazyImagesObserver.observe(image));

// * Sticky navigation
// const navHeight = headerTop.getBoundingClientRect().height;
// const getStickyNav = entries => {
//   const entry = entries[0];
//   if (!entry.isIntersecting) {
//     headerTop.classList.add('sticky');
//   } else {
//     headerTop.classList.remove('sticky');
//   }
//   if (window.innerWidth <= 1200) {
//     headerTop.classList.remove('sticky');
//   }
// };

// const headerObserver = new IntersectionObserver(getStickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `${navHeight}px`,
// });
// headerObserver.observe(header);

// * Navigation links fading
function fadingLinks(e, opacity, closest) {
  if (e.target.classList.contains('nav-link')) {
    const linkOver = e.target;
    const siblingLinks = linkOver
      .closest(closest)
      .querySelectorAll('.nav-link');

    siblingLinks.forEach(link => {
      if (link !== linkOver) {
        link.style.opacity = opacity;
      }
    });
  }
}
menuList.addEventListener('mouseover', e => {
  fadingLinks(e, 0.4, '.menu-list');
});
menuList.addEventListener('mouseout', e => {
  fadingLinks(e, 1, '.menu-list');
});
portfolioList.addEventListener('mouseover', e => {
  fadingLinks(e, 0.4, '.menu__list-1');
});
portfolioList.addEventListener('mouseout', e => {
  fadingLinks(e, 1, '.menu__list-1');
});

// * Sections appearance
const allSections = document.querySelectorAll('.section');
const appearanceSection = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.4,
});
allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// * Adaptive for menu
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});

menuBtn1.addEventListener('click', () => {
  menu1.classList.toggle('menu--open-1');
  menuBtn1.classList.toggle('rotated');
});

menuBtn2.addEventListener('click', () => {
  menu2.classList.toggle('menu--open-2');
  menuBtn2.classList.toggle('rotated');
});

// * Slider
let slides = document.querySelectorAll('.mySlides');
let dots = document.querySelectorAll('.dot');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' slider-active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' slider-active';
}

// * Leaflet map
const map = L.map('map').setView([44.769459, 17.181912], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
let marker = L.marker([44.769459, 17.181912]).addTo(map);

// * Statistics Dataset
const webEl = document.getElementById('statistics-web');
const logoDesignEl = document.getElementById('statistics-logo');
const printDesignEl = document.getElementById('statistics-print');
const mobileAppEl = document.getElementById('statistics-mobile');
// To edit values in 'statistics' section, just change numbers below:
const webValue = (webEl.dataset.web = '305');
const logoValue = (logoDesignEl.dataset.logo = '220');
const printValue = (printDesignEl.dataset.print = '52');
const mobileValue = (mobileAppEl.dataset.mobile = '88');

webEl.innerHTML = webValue;
logoDesignEl.innerHTML = logoValue;
printDesignEl.innerHTML = printValue;
mobileAppEl.innerHTML = mobileValue;

// * Expertise Dataset
const brandingEl = document.getElementById('branding-value');
const designEl = document.getElementById('design-value');
const developmentEl = document.getElementById('development-value');
const brandingLineEl = document.getElementById('line-1');
const designLineEl = document.getElementById('line-2');
const developmentLineEl = document.getElementById('line-3');
// To edit values in 'expertise' section, just change numbers below:
const brandingValue = (brandingEl.dataset.branding = '90');
const designValue = (designEl.dataset.design = '80');
const developmentValue = (developmentEl.dataset.development = '85');

brandingEl.innerHTML = brandingValue;
designEl.innerHTML = designValue;
developmentEl.innerHTML = developmentValue;
brandingLineEl.style.backgroundImage = `linear-gradient(to right, black ${brandingValue}%, transparent ${
  100 - Number(brandingValue)
}%)`;
designLineEl.style.backgroundImage = `linear-gradient(to right, black ${designValue}%, transparent ${
  100 - Number(designValue)
}%)`;
developmentLineEl.style.backgroundImage = `linear-gradient(to right, black ${developmentValue}%, transparent ${
  100 - Number(developmentValue)
}%)`;

// * Pricing Dataset
const basicEl = document.getElementById('basic');
const starterEl = document.getElementById('starter');
const profyEl = document.getElementById('profy');
// To edit values in 'pricing' section, just change numbers below:
const basicValue = (basicEl.dataset.basic = '29');
const starterValue = (starterEl.dataset.starter = '50');
const profyValue = (starterEl.dataset.starter = '70');

basicEl.innerHTML = basicValue;
starterEl.innerHTML = starterValue;
profyEl.innerHTML = profyValue;
