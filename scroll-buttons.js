document.addEventListener("DOMContentLoaded", function () {
    // Function to handle smooth scrolling
    function scrollToSection(event, targetId) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Mapping buttons to their target sections
    const scrollMappings = [
        { selector: ".contact-btn", target: "4" },
        { selector: ".btn.btn-primary", target: "2" },
        { selector: ".txt-btn", target: "3" }
    ];

    // Attach event listeners to each button
    scrollMappings.forEach(mapping => {
        const button = document.querySelector(mapping.selector);
        if (button) {
            button.addEventListener("click", (event) => scrollToSection(event, mapping.target));
        }
    });
});
