document.addEventListener('DOMContentLoaded', () => {
    const potatoDiv = document.getElementById('potato');
    const totalImages = 24;
    let currentImageIndex = 1;
    let intervalId;
    let isRunning = false;

    const changeImage = () => {
        potatoDiv.style.backgroundImage = `url('potatos/potato_${currentImageIndex}.jpg')`;
        currentImageIndex = (currentImageIndex % totalImages) + 1;
    };

    const startSlideshow = () => {
        if (!isRunning) {
            intervalId = setInterval(changeImage, 100); // The number of milliseconds between each image change
            isRunning = true;
        }
    };

    const stopSlideshow = () => {
        clearInterval(intervalId);
        isRunning = false;
    };

    const toggleSlideshow = () => {
        if (isRunning) {
            stopSlideshow();
        } else {
            startSlideshow();
        }
    };

    potatoDiv.addEventListener('click', toggleSlideshow);
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevent scrolling when space is pressed
            toggleSlideshow();
        }
    });

    // Start the slideshow initially
    startSlideshow();
});
