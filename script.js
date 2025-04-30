document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('form-message');
            formMessage.textContent = "ကျေးဇူးတင်ပါတယ်! သင့်မက်ဆေ့ဂျ်ကိုလက်ခံရရှိပါပြီ။";
            formMessage.style.backgroundColor = "#d4edda";
            formMessage.style.color = "#155724";
            
            // Reset the form
            contactForm.reset();
            
            // Hide the message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = "";
                formMessage.style.backgroundColor = "";
                formMessage.style.color = "";
            }, 5000);
        });
    }

    // Simple image gallery functionality
    const photos = document.querySelectorAll('.photo img');
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            // In a more complete version, this would open a modal or lightbox
            console.log('Photo clicked:', this.alt);
        });
    });
});