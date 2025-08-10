// DOM Elements
const soundBtn = document.getElementById('soundBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const shareBtn = document.getElementById('shareBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sceneImage = document.querySelector('.scene-image');
const sceneContainer = document.querySelector('.scene-container');
const sceneText = document.getElementById('sceneText');
const currentSceneSpan = document.querySelector('.current-scene');
const totalScenesSpan = document.querySelector('.total-scenes');

// State
let isSoundEnabled = false;
let isFullscreen = false;
let currentSceneIndex = 0;

// Scene data (can be expanded for multiple scenes)
const scenes = [
    {
        image: '1.bölüm.jpg',
        text: 'Merhaba! Bu macera dolu hikayeye hoş geldiniz. İki dostun başlayacak olan serüvenini takip edeceğiz.',
        audio: null // Can be added later
    }
    // More scenes can be added here
];

// Initialize the page
function init() {
    setupEventListeners();
    loadScene(currentSceneIndex);
    updateNavigation();
    
    // Add loading animation for image
    if (sceneImage) {
        sceneImage.addEventListener('load', () => {
            sceneImage.classList.add('loaded');
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Sound button
    soundBtn?.addEventListener('click', toggleSound);
    
    // Fullscreen button
    fullscreenBtn?.addEventListener('click', toggleFullscreen);
    
    // Share button
    shareBtn?.addEventListener('click', shareScene);
    
    // Navigation buttons
    prevBtn?.addEventListener('click', () => navigateScene(-1));
    nextBtn?.addEventListener('click', () => navigateScene(1));
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Image click for fullscreen
    sceneImage?.addEventListener('click', toggleFullscreen);
    
    // Escape key to exit fullscreen
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isFullscreen) {
            toggleFullscreen();
        }
    });
}

// Load scene
function loadScene(index) {
    if (index < 0 || index >= scenes.length) return;
    
    const scene = scenes[index];
    currentSceneIndex = index;
    
    if (sceneImage && scene.image) {
        sceneImage.src = scene.image;
        sceneImage.alt = `Sahne ${index + 1}`;
    }
    
    if (sceneText && scene.text) {
        sceneText.innerHTML = `<p>${scene.text}</p>`;
    }
    
    updateNavigation();
}

// Update navigation state
function updateNavigation() {
    if (prevBtn) {
        prevBtn.disabled = currentSceneIndex === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentSceneIndex === scenes.length - 1;
    }
    
    if (currentSceneSpan) {
        currentSceneSpan.textContent = currentSceneIndex + 1;
    }
    
    if (totalScenesSpan) {
        totalScenesSpan.textContent = scenes.length;
    }
}

// Navigate between scenes
function navigateScene(direction) {
    const newIndex = currentSceneIndex + direction;
    if (newIndex >= 0 && newIndex < scenes.length) {
        loadScene(newIndex);
        
        // Add transition effect
        sceneContainer.style.opacity = '0';
        setTimeout(() => {
            sceneContainer.style.opacity = '1';
        }, 300);
    }
}

// Toggle sound
function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    
    if (soundBtn) {
        const icon = soundBtn.querySelector('i');
        if (icon) {
            icon.className = isSoundEnabled ? 'fas fa-volume-mute' : 'fas fa-volume-up';
        }
    }
    
    // Add sound functionality here when audio is implemented
    console.log('Sound toggled:', isSoundEnabled);
}

// Toggle fullscreen
function toggleFullscreen() {
    if (!isFullscreen) {
        enterFullscreen();
    } else {
        exitFullscreen();
    }
}

function enterFullscreen() {
    if (sceneContainer) {
        sceneContainer.classList.add('fullscreen');
        isFullscreen = true;
        
        if (fullscreenBtn) {
            const icon = fullscreenBtn.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-compress';
            }
        }
    }
}

function exitFullscreen() {
    if (sceneContainer) {
        sceneContainer.classList.remove('fullscreen');
        isFullscreen = false;
        
        if (fullscreenBtn) {
            const icon = fullscreenBtn.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-expand';
            }
        }
    }
}

// Share functionality
function shareScene() {
    if (navigator.share) {
        navigator.share({
            title: 'Web Comic - Bölüm 1',
            text: 'Bu macera dolu hikayeyi keşfedin!',
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        copyToClipboard(window.location.href);
        showNotification('Link kopyalandı!');
    }
}

// Copy to clipboard utility
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(100, 181, 246, 0.9);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Keyboard navigation
function handleKeyboardNavigation(e) {
    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            navigateScene(-1);
            break;
        case 'ArrowRight':
            e.preventDefault();
            navigateScene(1);
            break;
        case ' ':
            e.preventDefault();
            toggleFullscreen();
            break;
        case 'm':
        case 'M':
            e.preventDefault();
            toggleSound();
            break;
    }
}

// Add CSS animations
const animations = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .scene-container {
        transition: opacity 0.3s ease;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = animations;
document.head.appendChild(styleSheet);

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Recalculate any layout-dependent values here if needed
}, 250));

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.control-btn, .nav-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
    
    // Add click ripple effect
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation
const rippleAnimation = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const rippleStyleSheet = document.createElement('style');
rippleStyleSheet.textContent = rippleAnimation;
document.head.appendChild(rippleStyleSheet);
