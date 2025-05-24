document.addEventListener("DOMContentLoaded", function () {
    const inputContainer = document.querySelector(".input");
    const icon = document.querySelector(".input i");
    let isExpanded = true; // Track the state of the input

    icon.addEventListener("click", function () {
         do{
            inputContainer.classList.toggle("expanded");
        // Disable wrapping behavior
        } while(!isExpanded);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".progress-bar");

    slider.addEventListener("input", function () {
        const value = slider.value; // Get the current value of the slider
        const max = slider.max; // Get the maximum value of the slider
        const percentage = (value / max) * 100; // Calculate the percentage of the slider filled

        // Update the slider's background gradient
        slider.style.background = `linear-gradient(to right, #2F2F2F ${percentage}%, white ${percentage}%)`;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Toggle the dropdown menu on hamburger icon click
    hamburgerIcon.addEventListener("click", function () {
        hamburgerIcon.classList.toggle("active");
        dropdownMenu.style.display = dropdownMenu.style.display === "flex" ? "none" : "flex";
    });
});