document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Sticky Header Background on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none'; // Optional: remove shadow at top
        }
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => scrollObserver.observe(el));

    // Form Submission Handling
    const bookingForm = document.getElementById('bookingForm');
    const formMessage = document.getElementById('formMessage');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation simulation
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            
            if(name && phone) {
                // Simulate API call
                const submitBtn = bookingForm.querySelector('button');
                const originalText = submitBtn.innerText;
                
                submitBtn.innerText = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    formMessage.innerText = 'Thank you! Your appointment request has been sent. We will contact you shortly.';
                    formMessage.style.color = 'green';
                    bookingForm.reset();
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
        });
    }
});
