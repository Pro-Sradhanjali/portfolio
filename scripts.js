// Toggle the menu visibility when the hamburger icon is clicked
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal functionality
// const imageDescText = document.getElementById('ImageDesc');
const videoContainers = document.querySelectorAll('.video-container');
const imageItems = document.querySelectorAll('.scroller-item');

const modal = document.getElementById('description-modal');
const modalDescriptionText = document.getElementById('modal-description-text');
const modalHeading = document.getElementById('modal-heading');
const closeModalBtn = document.getElementById('close-modal');

videoContainers.forEach(container => {
    container.addEventListener('click', () => {
        // Get the description from the data-description attribute
        const heading = container.getAttribute('data-heading');
        const description = container.getAttribute('data-description');
        // Update the modal content
        modalHeading.textContent = heading;
        modalDescriptionText.textContent = description;
        // Show the modal
        modal.classList.add('active');
    });
});

imageItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the description from the data-description attribute
        const heading = item.getAttribute('data-heading');
        const description = item.getAttribute('data-description');
        // Update the modal content
        modalHeading.textContent = heading;
        modalDescriptionText.textContent = description;
        // Show the modal
        modal.classList.add('active');
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

