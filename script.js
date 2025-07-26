
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
