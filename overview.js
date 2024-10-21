// Array of background images and text for each slide
const slides = [
    {
        image: './Images/overview bg 1.jpg',
        text: 'Enjoy every Moment'
    },
    {
        image: './Images/overview bg 2.jpg',
        text: 'Meet Famous Artists'
    },
    {
        image: 'Images/overview bg 3.jpg',
        text: 'Vibe together'
    },
    {
        image: 'Images/overview bg 4.jpg',
        text: 'Let the other you takeover'
    }
];

// Get elements for the hero section, hero content, and text
const heroSection = document.querySelector('.hero');
const heroText = document.getElementById('hero-text');
const heroContent = document.getElementById('hero-content');

// Variable to keep track of the current slide
let currentSlide = 0;

// Function to change the background and text with fade animations
function changeSlide() {
    // Add fade-out class to start the fade-out animation
    heroSection.classList.add('fade-out');
    
    // Wait for the fade-out transition to complete before changing content
    setTimeout(() => {
        // Update the background image and text content
        heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slides[currentSlide].image}')`;
        heroText.textContent = slides[currentSlide].text;
        
        // Remove the fade-out class and add fade-in class to start the fade-in animation
        heroSection.classList.remove('fade-out');
        heroSection.classList.add('fade-in');

        // Wait for fade-in to complete before moving to the next slide
        setTimeout(() => {
            heroSection.classList.remove('fade-in');
        }, 1000); // Match this time to the CSS transition duration

        // Move to the next slide, or loop back to the first slide
        currentSlide = (currentSlide + 1) % slides.length;
    }, 1000); // Wait for the fade-out animation (same duration as CSS transition)
}

// Call changeSlide every 5 seconds
setInterval(changeSlide, 5000);

// Initial call to display the first slide
changeSlide();
