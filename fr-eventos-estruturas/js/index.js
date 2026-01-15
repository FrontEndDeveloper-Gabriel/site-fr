document.addEventListener("DOMContentLoaded", function () {

  const carousels = document.querySelectorAll(".carousel-container-imagem");

  carousels.forEach(carousel => {
    const track = carousel.querySelector(".carousel-track-imagem");
    const btnLeft = carousel.querySelector(".arrow-left");
    const btnRight = carousel.querySelector(".arrow-right");

    const item = track.querySelector(".carousel-item");
    const itemWidth = item.offsetWidth + 20;
    let scrollPosition = 0;

    btnLeft.addEventListener("click", () => {
      scrollPosition -= itemWidth;
      if (scrollPosition < 0) scrollPosition = 0;
      track.style.transform = `translateX(-${scrollPosition}px)`;
    });

    btnRight.addEventListener("click", () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      scrollPosition += itemWidth;
      if (scrollPosition > maxScroll) scrollPosition = maxScroll;
      track.style.transform = `translateX(-${scrollPosition}px)`;
    });
  });
});


function retornarAoTopo() {
  window.scrollTo({ top: 10, behavior: 'smooth' });
};

function openNav() {
  document.getElementById("menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
};

function closeNav() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
};

const hamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('#menu-mobile');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  menuMobile.classList.toggle('active');
});