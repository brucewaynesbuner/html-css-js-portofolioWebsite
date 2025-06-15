function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('show');
}

let currentIndex = 0;

function moveCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.skill-card');
  const itemWidth = items[0].offsetWidth;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  } else if (currentIndex >= items.length) {
    currentIndex = 0;
  }

  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
