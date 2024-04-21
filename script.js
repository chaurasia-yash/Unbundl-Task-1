let currentIndex = 0;
const intervalTime = 3000; // Time between auto rotation (3 seconds)
let interval;

function startCarousel() {
    interval = setInterval(() => {
        moveCarousel(1);
    }, intervalTime);
}

function moveCarousel(direction) {
    clearInterval(interval); // Clear interval to prevent conflicts
    const carousel = document.querySelector('.carousel');
    const productWidth = document.querySelector('.product').offsetWidth;
    const maxIndex = carousel.childElementCount - 1;

    currentIndex = (currentIndex + direction) % (maxIndex + 1);
    currentIndex = currentIndex < 0 ? maxIndex : currentIndex;

    const offset = -currentIndex * productWidth;
    carousel.style.transform = `translateX(${offset}px)`;

    startCarousel(); // Restart auto rotation
}

startCarousel(); // Start auto rotation initially
