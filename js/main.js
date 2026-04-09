/**
 * Academic Personal Homepage - Main JavaScript
 * Minimal JavaScript for mobile navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    initMobileMenu();
    
    // Smooth scroll for anchor links
    initSmoothScroll();
    
    // Initialize visitor statistics and location
    initVisitorStats();
});

/**
 * Initialize mobile menu toggle
 */
function initMobileMenu() {
    // Create mobile menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-toggle';
    menuButton.innerHTML = '☰';
    menuButton.setAttribute('aria-label', 'Toggle navigation menu');
    document.body.appendChild(menuButton);
    
    const sidebar = document.querySelector('.sidebar');
    
    // Toggle sidebar on button click
    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        menuButton.innerHTML = sidebar.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            sidebar.classList.remove('active');
            menuButton.innerHTML = '☰';
        }
    });
    
    // Close sidebar when clicking on a link (mobile)
    const navLinks = sidebar.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                menuButton.innerHTML = '☰';
            }
        });
    });
}

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Handle window resize
 */
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.mobile-menu-toggle');
    
    // Reset sidebar state on desktop view
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
        if (menuButton) {
            menuButton.innerHTML = '☰';
        }
    }
});

/**
 * Initialize visitor statistics and location detection
 */
function initVisitorStats() {
    // Get visitor location using ipapi.co (free tier available)
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const locationElement = document.getElementById('visitor-location');
            const ipElement = document.getElementById('visitor-ip');
            
            if (locationElement) {
                const city = data.city || 'Unknown';
                const region = data.region || '';
                const country = data.country_name || 'Unknown';
                const flag = getCountryFlag(data.country_code);
                locationElement.innerHTML = `${flag} ${city}${region ? ', ' + region : ''}, ${country}`;
            }
            
            if (ipElement) {
                ipElement.textContent = data.ip || 'Hidden';
            }
            
            // Log visit (you can send this to your own server or service)
            logVisit(data);
        })
        .catch(error => {
            console.log('Location detection failed:', error);
            const locationElement = document.getElementById('visitor-location');
            if (locationElement) {
                locationElement.textContent = 'Location unavailable';
            }
        });
    
    // Alternative: Use ipinfo.io as fallback
    setTimeout(() => {
        const locationElement = document.getElementById('visitor-location');
        if (locationElement && locationElement.textContent === 'Detecting...') {
            fetch('https://ipinfo.io/json')
                .then(response => response.json())
                .then(data => {
                    const city = data.city || 'Unknown';
                    const region = data.region || '';
                    const country = data.country || 'Unknown';
                    const flag = getCountryFlag(data.country);
                    locationElement.innerHTML = `${flag} ${city}${region ? ', ' + region : ''}, ${country}`;
                    
                    const ipElement = document.getElementById('visitor-ip');
                    if (ipElement) {
                        ipElement.textContent = data.ip || 'Hidden';
                    }
                })
                .catch(() => {
                    locationElement.textContent = 'Location unavailable';
                });
        }
    }, 2000);
}

/**
 * Get country flag emoji from country code
 */
function getCountryFlag(countryCode) {
    if (!countryCode) return '🌍';
    const code = countryCode.toUpperCase();
    // Convert country code to regional indicator symbols
    const flag = code.replace(/./g, char => 
        String.fromCodePoint(127397 + char.charCodeAt(0))
    );
    return flag || '🌍';
}

/**
 * Log visit information (customize this to send to your backend)
 */
function logVisit(data) {
    // Example: Send to your own logging endpoint
    // fetch('https://your-api.com/log', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         timestamp: new Date().toISOString(),
    //         ip: data.ip,
    //         city: data.city,
    //         country: data.country_name,
    //         page: window.location.pathname,
    //         referrer: document.referrer
    //     })
    // });
    
    // For now, just log to console
    console.log('Visitor location:', {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        coordinates: `${data.latitude}, ${data.longitude}`,
        timezone: data.timezone,
        isp: data.org
    });
}