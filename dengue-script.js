// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Initialize all functionality
    initScrollProgress();
    initTableOfContents();
    initSocialShare();
    initAnimations();
    initResponsiveFeatures();
});

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;
    
    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
        progressBar.style.width = scrollPercent + '%';
    }
    
    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial call
}

// Table of Contents Functionality
function initTableOfContents() {
    const tocContainer = document.getElementById('tocContainer');
    const tocToggle = document.getElementById('tocToggle');
    const tocContent = document.getElementById('tocContent');
    const tocLinks = document.querySelectorAll('.toc-list a');
    const sections = document.querySelectorAll('section[id]');
    
    if (!tocContainer || !tocToggle || !tocContent) return;
    
    // Toggle TOC visibility
    tocToggle.addEventListener('click', function() {
        tocContent.classList.toggle('active');
    });
    
    // Close TOC when clicking outside
    document.addEventListener('click', function(e) {
        if (!tocContainer.contains(e.target)) {
            tocContent.classList.remove('active');
        }
    });
    
    // Intersection Observer for active section tracking
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.1
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
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Hide mobile TOC after click
                tocContent.classList.remove('active');
            }
        });
    });
    
    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            tocContent.classList.remove('active');
        }
    });
}

// Social Share Functionality
function initSocialShare() {
    const shareButtons = document.querySelectorAll('.share-button');
    const currentUrl = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const text = encodeURIComponent('Understanding dengue patterns, demographics, and seasonal trends through PharmEasy Lab data and global research insights.');
    
    shareButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            let shareUrl = '';
            
            switch (platform) {
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${title}%0A%0A${text}%0A%0A${currentUrl}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}`;
                    break;
                case 'link':
                    // Copy to clipboard
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText(window.location.href).then(function() {
                            showToast('Link copied to clipboard!');
                        }).catch(function() {
                            fallbackCopyToClipboard();
                        });
                    } else {
                        fallbackCopyToClipboard();
                    }
                    return;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
            }
        });
    });
    
    function fallbackCopyToClipboard() {
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showToast('Link copied to clipboard!');
            } else {
                showToast('Failed to copy link');
            }
        } catch (err) {
            showToast('Failed to copy link');
        }
        
        document.body.removeChild(textArea);
    }
}

// Animation Functionality
function initAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in-up');
    
    if (!animatedElements.length) return;
    
    const animationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Stop observing once animated
                animationObserver.unobserve(entry.target);
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

// Responsive Features
function initResponsiveFeatures() {
    // Handle window resize
    function handleResize() {
        const tocContainer = document.getElementById('tocContainer');
        const shareContainer = document.querySelector('.share-container');
        const tocContent = document.getElementById('tocContent');
        
        // Hide TOC and share buttons on mobile/tablet
        if (window.innerWidth <= 1024) {
            if (tocContainer) tocContainer.style.display = 'none';
            if (shareContainer) shareContainer.style.display = 'none';
        } else {
            if (tocContainer) tocContainer.style.display = 'block';
            if (shareContainer) shareContainer.style.display = 'flex';
            if (tocContent) tocContent.classList.remove('active');
        }
    }
    
    // Initial call
    handleResize();
    
    // Listen for resize events
    window.addEventListener('resize', debounce(handleResize, 250));
    
    // Add touch-friendly interactions for mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // Add touch feedback for buttons
        const buttons = document.querySelectorAll('.share-button, .toc-toggle, .tip-card, .stat-card');
        buttons.forEach(function(button) {
            button.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            });
            
            button.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
        });
    }
}

// Toast Notification
function showToast(message, duration = 3000) {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast-notification');
    existingToasts.forEach(toast => toast.remove());
    
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #059669;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 8px 30px rgba(5, 150, 105, 0.3);
        z-index: 10000;
        font-size: 14px;
        font-weight: 500;
        max-width: 300px;
        word-wrap: break-word;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translateX(100%);
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(function() {
        toast.style.transform = 'translateX(0)';
    });
    
    // Remove after duration
    setTimeout(function() {
        toast.style.transform = 'translateX(100%)';
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, duration);
}

// Chart Interactions
function initChartInteractions() {
    const chartBars = document.querySelectorAll('.chart-bar');
    
    chartBars.forEach(function(bar) {
        bar.addEventListener('mouseenter', function() {
            const value = this.querySelector('.bar-value');
            if (value) {
                value.style.opacity = '1';
                value.style.transform = 'translateX(-50%) scale(1.1)';
            }
        });
        
        bar.addEventListener('mouseleave', function() {
            const value = this.querySelector('.bar-value');
            if (value) {
                value.style.opacity = '0.7';
                value.style.transform = 'translateX(-50%) scale(1)';
            }
        });
    });
}

// Utility Functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimizations
function optimizePerformance() {
    // Use passive listeners for scroll events
    window.addEventListener('scroll', function() {
        // Scroll handlers are already optimized above
    }, { passive: true });
    
    // Preload images
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.warn('Script error:', e.error);
});

// Initialize chart interactions after DOM load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initChartInteractions, 1000);
    optimizePerformance();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, pause any animations if needed
        const tocContent = document.getElementById('tocContent');
        if (tocContent) {
            tocContent.classList.remove('active');
        }
    }
});

// Accessibility improvements
function initAccessibility() {
    // Add keyboard navigation for interactive elements
    const interactiveElements = document.querySelectorAll('.share-button, .toc-toggle, .chart-bar');
    
    interactiveElements.forEach(function(element) {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
        
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add ARIA labels where missing
    const shareButtons = document.querySelectorAll('.share-button');
    shareButtons.forEach(function(button) {
        if (!button.hasAttribute('aria-label')) {
            const platform = button.getAttribute('data-platform');
            button.setAttribute('aria-label', `Share on ${platform}`);
        }
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', function() {
    initAccessibility();
});

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger any delayed animations
    setTimeout(function() {
        const delayedElements = document.querySelectorAll('.fade-in-up:not(.in-view)');
        delayedElements.forEach(function(element, index) {
            setTimeout(function() {
                element.classList.add('in-view');
            }, index * 100);
        });
    }, 500);
});