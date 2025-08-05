/*
  Portfolio Website Script
  Author: Wania Khan
  Description: Adds interactivity to the portfolio website, 
  including scroll-based animations for cards.
*/
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const heading = document.getElementById("typingHeading");

window.addEventListener("scroll", () => {
  if (heading) {
    const top = heading.getBoundingClientRect().top;
    const visible = top >= 0 && top <= window.innerHeight;

    if (visible) {
      heading.classList.remove("typewriter");

      void heading.offsetWidth;

      heading.classList.add("typewriter");
    }
  }
});

});
