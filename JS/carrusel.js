const carouselItems = document.querySelectorAll('#carousel-example div[id^="carousel-item-"]');
const $prevButton = document.getElementById('data-carousel-prev');
const $nextButton = document.getElementById('data-carousel-next');
const indicators = document.querySelectorAll('#carousel-example button[id^="carousel-indicator-"]');

let currentCarouselItem = 0;

// Mostrar el primer item
carouselItems[currentCarouselItem].classList.remove('hidden');
indicators[currentCarouselItem].classList.add('bg-white', 'dark:bg-gray-800');

$prevButton.addEventListener('click', () => {
    currentCarouselItem = (currentCarouselItem - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

$nextButton.addEventListener('click', () => {
    currentCarouselItem = (currentCarouselItem + 1) % carouselItems.length;
    updateCarousel();
});

function updateCarousel() {
    carouselItems.forEach((item) => item.classList.add('hidden'));
    indicators.forEach((indicator) => {
        indicator.classList.remove('bg-white', 'dark:bg-gray-800');
    });

    carouselItems[currentCarouselItem].classList.remove('hidden');
    indicators[currentCarouselItem].classList.add('bg-white', 'dark:bg-gray-800');
}
