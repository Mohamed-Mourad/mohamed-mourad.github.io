document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('.carousel > input');
    const thumbnails = document.querySelectorAll(".carousel__thumbnails li");
    const slidesContainer = document.querySelector(".carousel__slides");
    const slides = document.querySelectorAll(".carousel__slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    // Function to update the selected slide and thumbnail
    const updateSelection = (index) => {
        //const slideWidth = slides[0].offsetWidth;
        const offset = index * 100;

        // Update the input's checked state
        inputs.forEach((input, idx) => {
            input.checked = idx === index;
        });

        // TODO: create sliding effect
        const firstSlide = slides[0];
        firstSlide.style.marginLeft = `-${offset}%`;

        // Remove box-shadow from all thumbnails
        thumbnails.forEach(li => li.style.boxShadow = '');

        // Apply box-shadow to the selected thumbnail
        thumbnails[index].style.boxShadow = '0px 0px 0px 5px rgba(0, 0, 255, 0.5)';

        // Update the current index
        currentIndex = index;
    };

    // Add click event listeners to thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateSelection(index);
        });
    });
    
    // Add click event listeners for next and previous buttons
    prevButton.addEventListener("click", () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
        updateSelection(newIndex);
    });

    nextButton.addEventListener("click", () => {
        const newIndex = (currentIndex + 1) % slides.length;
        updateSelection(newIndex);
    });

    // Initialize the first slide and thumbnail
    updateSelection(currentIndex);
});
