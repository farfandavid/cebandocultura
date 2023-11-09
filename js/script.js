document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');

  let currentIndex = 0;

  function showImage(index) {
    const itemWidth = carousel.clientWidth;
    carousel.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  function moveToNext() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    showImage(currentIndex);
  }

  function moveToPrev() {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    showImage(currentIndex);
  }

  nextButton.addEventListener('click', moveToNext);
  prevButton.addEventListener('click', moveToPrev);
});
