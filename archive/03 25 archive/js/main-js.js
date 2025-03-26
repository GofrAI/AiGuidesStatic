// Main JavaScript file for your Cloudflare Pages site

document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact form functionality if it exists
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a backend service
            // For a static site, you could use a service like Formspree, Netlify Forms, etc.
            console.log('Form submitted:', { name, email, message });
            
            // Display a success message (in a real app, do this after successful submission)
            alert('Thanks for your message! This is a demo form.');
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add an active class to the current navigation item
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// You can add more JavaScript functionality here
// For example: image sliders, modals, form validation, etc.
