'use strict';
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
const brandingValue = (brandingEl.dataset.branding = '90');
const designValue = (designEl.dataset.design = '80');
const developmentValue = (developmentEl.dataset.development = '85');

brandingEl.innerHTML = brandingValue;
designEl.innerHTML = designValue;
developmentEl.innerHTML = developmentValue;
brandingLineEl.style.backgroundImage = `linear-gradient(to right, black ${brandingValue}%, transparent ${
  100 - Number(brandingValue)
}%)`;

// * Pricing Dataset
const basicEl = document.getElementById('basic');
const starterEl = document.getElementById('starter');
const profyEl = document.getElementById('profy');
const basicValue = (basicEl.dataset.basic = '29');
const starterValue = (starterEl.dataset.starter = '50');
const profyValue = (starterEl.dataset.starter = '70');

basicEl.innerHTML = basicValue;
starterEl.innerHTML = starterValue;
profyEl.innerHTML = profyValue;
