
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
            trackAdClick(); // Track the ad click
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
        
        // Track visitor
        trackVisitor();
    } catch (error) {
        console.log('Newsletter input error handled');
    }
});

// Visitor Tracking System
function trackVisitor() {
    try {
        // Get current visitor count
        let totalVisitors = parseInt(localStorage.getItem('totalVisitors') || '0');
        let todayVisitors = parseInt(localStorage.getItem('todayVisitors') || '0');
        let adClicks = parseInt(localStorage.getItem('adClicks') || '0');
        
        // Check if this is a new visitor today
        const today = new Date().toDateString();
        const lastVisitDate = localStorage.getItem('lastVisitDate');
        
        if (lastVisitDate !== today) {
            // Reset daily count if it's a new day
            if (lastVisitDate && lastVisitDate !== today) {
                todayVisitors = 0;
            }
            todayVisitors++;
            localStorage.setItem('todayVisitors', todayVisitors.toString());
            localStorage.setItem('lastVisitDate', today);
        }
        
        // Check if this is a new session (new visitor)
        const sessionKey = 'visitor_session_' + Date.now();
        if (!sessionStorage.getItem('currentSession')) {
            totalVisitors++;
            localStorage.setItem('totalVisitors', totalVisitors.toString());
            sessionStorage.setItem('currentSession', sessionKey);
            
            // Add to recent visitors list
            addRecentVisitor();
        }
        
        console.log(`Total Visitors: ${totalVisitors}, Today: ${todayVisitors}`);
        
    } catch (error) {
        console.log('Visitor tracking error handled');
    }
}

// Add recent visitor
function addRecentVisitor() {
    try {
        const visitors = JSON.parse(localStorage.getItem('recentVisitors') || '[]');
        
        // Get basic visitor info
        const visitorInfo = {
            timestamp: new Date().toLocaleString('so-SO'),
            country: getVisitorCountry(),
            device: getDeviceType(),
            page: document.title || 'Home',
            ip: 'Hidden', // For privacy
            userAgent: navigator.userAgent.substring(0, 50) + '...'
        };
        
        visitors.push(visitorInfo);
        
        // Keep only last 50 visitors
        if (visitors.length > 50) {
            visitors.shift();
        }
        
        localStorage.setItem('recentVisitors', JSON.stringify(visitors));
        
    } catch (error) {
        console.log('Recent visitor tracking error handled');
    }
}

// Get visitor country (simplified)
function getVisitorCountry() {
    try {
        // This is a simple approach - for real geolocation, you'd use an API
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const language = navigator.language || navigator.userLanguage;
        
        if (timezone.includes('Mogadishu') || language.includes('so')) {
            return '🇸🇴 Somalia';
        } else if (timezone.includes('Nairobi')) {
            return '🇰🇪 Kenya';
        } else if (timezone.includes('Dubai')) {
            return '🇦🇪 UAE';
        } else if (language.includes('en')) {
            return '🇺🇸 English Speaker';
        } else {
            return '🌍 Unknown';
        }
    } catch (error) {
        return '🌍 Unknown';
    }
}

// Get device type
function getDeviceType() {
    try {
        const userAgent = navigator.userAgent;
        
        if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
            return '📱 Tablet';
        } else if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent)) {
            return '📱 Mobile';
        } else {
            return '💻 Desktop';
        }
    } catch (error) {
        return '❓ Unknown';
    }
}

// Track ad clicks
function trackAdClick() {
    try {
        let adClicks = parseInt(localStorage.getItem('adClicks') || '0');
        adClicks++;
        localStorage.setItem('adClicks', adClicks.toString());
        console.log(`Ad Clicks: ${adClicks}`);
    } catch (error) {
        console.log('Ad click tracking error handled');
    }
}

// Auto Share Functions
const shareData = {
    url: window.location.href,
    title: 'FadalRewards - Making Money Online',
    text: '🌟 Lacagta Online ku Sameynta! FadalRewards - Content Creator & Online Entrepreneur. Barashada ganacsiga, freelancing, iyo halal business tips! 💰✨'
};

// WhatsApp Share
function shareToWhatsApp() {
    try {
        const message = encodeURIComponent(`${shareData.text}\n\n${shareData.url}`);
        const whatsappUrl = `https://wa.me/?text=${message}`;
        window.open(whatsappUrl, '_blank');
        console.log('WhatsApp share opened');
    } catch (error) {
        console.log('WhatsApp share error handled');
    }
}

// Facebook Share
function shareToFacebook() {
    try {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
        window.open(facebookUrl, '_blank', 'width=600,height=400');
        console.log('Facebook share opened');
    } catch (error) {
        console.log('Facebook share error handled');
    }
}

// Twitter Share
function shareToTwitter() {
    try {
        const twitterText = encodeURIComponent(`${shareData.text} ${shareData.url}`);
        const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;
        window.open(twitterUrl, '_blank', 'width=600,height=400');
        console.log('Twitter share opened');
    } catch (error) {
        console.log('Twitter share error handled');
    }
}

// Telegram Share
function shareToTelegram() {
    try {
        const telegramText = encodeURIComponent(`${shareData.text}\n${shareData.url}`);
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareData.url)}&text=${telegramText}`;
        window.open(telegramUrl, '_blank');
        console.log('Telegram share opened');
    } catch (error) {
        console.log('Telegram share error handled');
    }
}

// Copy to Clipboard
function copyToClipboard() {
    try {
        const textToCopy = `${shareData.text}\n\n${shareData.url}`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                showCopySuccess();
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showCopySuccess();
        }
        console.log('Link copied to clipboard');
    } catch (error) {
        console.log('Clipboard error handled');
        alert('❌ Link copy gareyn kari waayay. Fadlan manually copy garee.');
    }
}

// Show copy success message
function showCopySuccess() {
    const originalText = document.querySelector('.clipboard span').textContent;
    const clipboardBtn = document.querySelector('.clipboard span');
    
    clipboardBtn.textContent = '✅ Copied!';
    setTimeout(() => {
        clipboardBtn.textContent = originalText;
    }, 2000);
    
    // Optional: Show a temporary alert
    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = '✅ Link ayaa clipboard-ka lagu kaydiyay!';
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--gradient-4);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: bold;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(alertDiv);
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Native Share (Web Share API)
function shareNative() {
    try {
        if (navigator.share) {
            navigator.share({
                title: shareData.title,
                text: shareData.text,
                url: shareData.url
            }).then(() => {
                console.log('Native share successful');
            }).catch(() => {
                fallbackShare();
            });
        } else {
            fallbackShare();
        }
    } catch (error) {
        console.log('Native share error handled');
        fallbackShare();
    }
}

// Fallback share function
function fallbackShare() {
    try {
        copyToClipboard();
        alert('📱 Device-kaaga native sharing ma taageero. Link ayaa clipboard-ka lagu kaydiyay!');
    } catch (error) {
        console.log('Fallback share error handled');
    }
}
