let currentIndex = 0;
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;

setInterval(() => {
    items[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].style.transform = 'translateX(0)';
}, 3000);
