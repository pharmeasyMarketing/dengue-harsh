// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    
    // Initialize all functionality
    initScrollProgress();
    initTableOfContents();
    initSocialShare();
    initAnimations();
});

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Table of Contents Functionality
function initTableOfContents() {
    const tocLinks = document.querySelectorAll('.toc-list a');
    const sections = document.querySelectorAll('section[id]');
    const tocToggle = document.getElementById('tocToggle');
    const tocList = document.getElementById('tocList');
    
    // Handle mobile toggle
    if (tocToggle) {
        tocToggle.addEventListener('click', function() {
            tocList.style.display = tocList.style.display === 'none' ? 'block' : 'none';
        });
    }
    
    // Intersection Observer for active section tracking
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Remove active class from all links
                tocLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                
                // Add active class to current section link
                const activeLink = document.querySelector(`a[data-section="${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(function(section) {
        observer.observe(section);
    });
    
    // Smooth scroll for TOC links
    tocLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Hide mobile menu after click
                if (window.innerWidth <= 768) {
                    tocList.style.display = 'none';
                }
            }
        });
    });
}

// Social Share Functionality
function initSocialShare() {
    const shareButtons = document.querySelectorAll('.share-btn');
    const currentUrl = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    
    shareButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            let shareUrl = '';
            
            switch (platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
                    break;
                case 'link':
                    // Copy to clipboard
                    navigator.clipboard.writeText(window.location.href).then(function() {
                        showToast('Link copied to clipboard!');
                    }).catch(function() {
                        // Fallback for older browsers
                        const textArea = document.createElement('textarea');
                        textArea.value = window.location.href;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        showToast('Link copied to clipboard!');
                    });
                    return;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// Animation Functionality
function initAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in-up');
    
    const animationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(function(element) {
        animationObserver.observe(element);
    });
}

// Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-medium);
        z-index: 10000;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.3s ease;
        transform: translateX(100%);
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(function() {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(function() {
        toast.style.transform = 'translateX(100%)';
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Responsive Handling
function handleResize() {
    const tocList = document.getElementById('tocList');
    
    if (window.innerWidth > 768) {
        tocList.style.display = 'block';
    } else {
        tocList.style.display = 'none';
    }
}

// Initialize resize handler
window.addEventListener('resize', handleResize);

// Handle smooth scrolling for older browsers
function smoothScroll(target) {
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
    
    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    // Handle escape key to close mobile TOC
    if (e.key === 'Escape') {
        const tocList = document.getElementById('tocList');
        if (window.innerWidth <= 768) {
            tocList.style.display = 'none';
        }
    }
});

// Add loading class removal for better perceived performance
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Error handling for images
document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Image failed to load:', this.src);
    });
});

// Add intersection observer polyfill check
if (!window.IntersectionObserver) {
    console.warn('IntersectionObserver not supported. Consider adding a polyfill for better browser support.');
}