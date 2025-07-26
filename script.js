
// Theme Toggle Functionality
function toggleTheme() {
    try {
        const body = document.body;
        const themeIcon = document.getElementById('theme-icon');
        
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    } catch (error) {
        console.log('Theme toggle error handled');
    }
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function() {
    try {
        const savedTheme = localStorage.getItem('theme');
        const themeIcon = document.getElementById('theme-icon');
        
        if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            if (themeIcon) {
                themeIcon.className = 'fas fa-sun';
            }
        }
    } catch (error) {
        console.log('Theme loading error handled');
    }
});

// Add smooth scrolling for mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        try {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } catch (error) {
            console.log('Smooth scroll error handled');
        }
    });
});

// Add link click animation
document.querySelectorAll('.link-button').forEach(function(button) {
    button.addEventListener('click', function() {
        try {
            console.log('Ad clicked - tracking revenue');
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        } catch (error) {
            console.log('Button animation error handled');
        }
    });
});

// Handle ad clicks
document.querySelectorAll('.ad-banner, .floating-ad, .content-ad').forEach(function(ad) {
    ad.addEventListener('click', function() {
        try {
            console.log('Ad clicked - tracking revenue');
        } catch (error) {
            console.log('Ad click error handled');
        }
    });
});

// Newsletter Subscription
function subscribeNewsletter() {
    try {
        const email = document.getElementById('newsletterEmail').value;
        if (email && email.includes('@')) {
            alert('✅ Mahadsanid! Email-kaaga ayaan ku daray newsletter-kayaga. Waxaad heli doontaa tips cusub maalin walba!');
            document.getElementById('newsletterEmail').value = '';
            
            // Update subscriber count
            const countElement = document.querySelector('.subscriber-count span');
            if (countElement) {
                const currentCount = parseInt(countElement.textContent.match(/\d+/)[0]);
                countElement.textContent = `${currentCount + 1}+ dadka ah ayaa newsletter-kayaga subscribe u ah!`;
            }
        } else {
            alert('❌ Fadlan email sax ah ku qor!');
        }
    } catch (error) {
        console.log('Newsletter subscription error handled');
    }
}

// Download Resources
function downloadResource(type) {
    try {
        let message = '';
        switch(type) {
            case 'ebook':
                message = '📚 E-Book-ga ayaa la download gareeyay! Check email-kaaga si aad u hesho download link-ka.';
                break;
            case 'template':
                message = '📄 Templates-ka ayaa la download gareeyay! Waxaad ka heli kartaa Downloads folder-kaaga.';
                break;
            case 'checklist':
                message = '✅ Success Checklist-ka ayaa la download gareeyay! Good luck lacagta online samaynta!';
                break;
        }
        alert(message);
        console.log(`Resource downloaded: ${type}`);
    } catch (error) {
        console.log('Download error handled');
    }
}

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    try {
        // Remove active class from all
        testimonials.forEach(t => t.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        
        // Add active class to current
        if (testimonials[index]) testimonials[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        
        currentTestimonial = index;
    } catch (error) {
        console.log('Testimonial slider error handled');
    }
}

// Auto-slide testimonials
setInterval(() => {
    try {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    } catch (error) {
        console.log('Auto-slide error handled');
    }
}, 5000);

// Stats Counter Animation
function animateStats() {
    try {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current).toLocaleString();
                }
            }, 20);
        });
    } catch (error) {
        console.log('Stats animation error handled');
    }
}

// Initialize stats animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateStats, 1000);
});

// Handle Enter key in newsletter input
document.addEventListener('DOMContentLoaded', function() {
    try {
        const newsletterInput = document.getElementById('newsletterEmail');
        if (newsletterInput) {
            newsletterInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    subscribeNewsletter();
                }
            });
        }
    } catch (error) {
        console.log('Newsletter input error handled');
    }
});
