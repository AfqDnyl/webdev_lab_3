document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const images = container.querySelectorAll('.centered-image');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach(image => {
                image.classList.remove('active-image');
            });

            images[index].classList.add('active-image');
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        setInterval(nextImage, 2000); // Change image every 2 seconds (adjust as needed)
    });
});
