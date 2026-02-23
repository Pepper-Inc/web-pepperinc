// =====================================================
// PEPPER INC - INTERACTIVE JAVASCRIPT
// =====================================================

// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// =====================================================
// MOBILE MENU TOGGLE
// =====================================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// =====================================================
// SMOOTH SCROLL
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =====================================================
// ANIMATED COUNTER
// =====================================================
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 16);
    const suffix = element.getAttribute('data-suffix') || '';
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.round(target) + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current) + suffix;
        }
    }, 16);
}

// =====================================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =====================================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');

            // Animate counters when stats section is visible
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                if (target) {
                    animateCounter(entry.target, target);
                }
            }

            // Stagger animation for service cards
            if (entry.target.classList.contains('service-card-flip')) {
                const cards = document.querySelectorAll('.service-card-flip');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe stat numbers
document.querySelectorAll('.stat-number[data-target]').forEach(stat => {
    observer.observe(stat);
});

// Observe sections for fade-in animations
document.querySelectorAll('.section-header, .service-card-flip, .about-feature, .contact-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// =====================================================
// PARTICLES BACKGROUND
// =====================================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';

        // Random size
        const size = 2 + Math.random() * 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        particlesContainer.appendChild(particle);
    }
}

// Create particles on load
createParticles();

// =====================================================
// FLIP CARDS - MOBILE TOUCH SUPPORT
// =====================================================
// On desktop: pure CSS hover handles the 3D flip.
// On touch devices (iOS/Android): we use a CSS class toggle (is-flipped)
// with visibility+opacity transitions. This bypasses iOS Safari's
// unreliable backface-visibility inside preserve-3d containers.
// =====================================================
const flipCards = document.querySelectorAll('.service-card-flip');

const isTouchDevice = () => window.matchMedia('(hover: none), (pointer: coarse)').matches;

flipCards.forEach(card => {
    card.addEventListener('click', () => {
        if (!isTouchDevice()) return; // desktop uses CSS :hover, no JS needed

        const alreadyFlipped = card.classList.contains('is-flipped');

        // Close all other open cards first (one at a time)
        flipCards.forEach(c => c.classList.remove('is-flipped'));

        // Toggle the clicked card
        if (!alreadyFlipped) {
            card.classList.add('is-flipped');
        }
    });
});

// =====================================================
// FORM SUBMISSION — ANTI-BOT PROTECTION
// =====================================================
const contactForm = document.getElementById('contactForm');
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwhSWF2Z6rSC9MrRBZbU1cmHGglPAEP2DvN23tpAc_pJOq6uhUfg6dBrJtWH8wGJ5s/exec';

// --- Modal elements ---
const captchaOverlay = document.getElementById('captchaOverlay');
const captchaClose = document.getElementById('captchaClose');
const captchaCancel = document.getElementById('captchaCancel');
const captchaConfirm = document.getElementById('captchaConfirm');
const captchaError = document.getElementById('captchaError');
const mathAnswer = document.getElementById('mathAnswer');
const mathQuestion = document.getElementById('mathQuestion');

let mathCorrectAnswer = 0;
let pendingFormData = null;

// --- Generate a random math challenge ---
function generateMathChallenge() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '×'];
    const op = operators[Math.floor(Math.random() * operators.length)];

    let answer;
    if (op === '+') { answer = a + b; }
    else if (op === '-') {
        answer = Math.abs(a - b);
        mathQuestion.textContent = `${Math.max(a, b)} ${op} ${Math.min(a, b)}`;
        mathCorrectAnswer = answer;
        return;
    }
    else { answer = a * b; }

    mathQuestion.textContent = `${a} ${op} ${b}`;
    mathCorrectAnswer = answer;
}

// --- Open the confirmation modal ---
function openCaptchaModal(data) {
    pendingFormData = data;

    // Populate summary fields
    document.getElementById('summaryName').textContent = data.name || '—';
    document.getElementById('summaryEmail').textContent = data.email || '—';
    document.getElementById('summaryService').textContent = data.service || '—';

    // Generate a fresh math challenge
    generateMathChallenge();

    // Reset state
    mathAnswer.value = '';
    captchaError.textContent = '';
    captchaOverlay.classList.add('active');
    setTimeout(() => mathAnswer.focus(), 300);
}

// --- Close the modal ---
function closeCaptchaModal() {
    captchaOverlay.classList.remove('active');
    pendingFormData = null;
    mathAnswer.value = '';
    captchaError.textContent = '';
}

// --- Perform the actual send ---
async function sendFormData(data) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        Enviando...
        <svg class="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" style="animation: spin 1s linear infinite;">
            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="40" stroke-dashoffset="10" stroke-linecap="round"/>
        </svg>
    `;

    // Send to Google Apps Script Web App
    try {
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors', // Apps Script requiere no-cors o manejar redirect manualmente
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.warn('Submission to Sheet had a connection issue, but often succeeds with no-cors:', error);
    }

    // Restore button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHTML;

    // Build WhatsApp message
    const message = `
🚀 *Nueva Consulta - Pepper Inc*

👤 *Nombre:* ${data.name}
📧 *Email:* ${data.email}
📱 *Teléfono:* ${data.phone || 'No proporcionado'}
🔧 *Servicio:* ${data.service}

💬 *Mensaje:*
${data.message}
    `.trim();

    window.open(`https://wa.me/584141800020?text=${encodeURIComponent(message)}`, '_blank');

    // Reset form
    contactForm.reset();
}

// ── Form submit — intercept and show modal ──────────────────────────
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Honeypot check: if the hidden field has a value, it's a bot
    const honeypot = contactForm.querySelector('#website_url');
    if (honeypot && honeypot.value.trim() !== '') {
        console.warn('Bot detected via honeypot. Submission blocked.');
        return; // Silent block
    }

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    data.timestamp = new Date().toISOString();

    openCaptchaModal(data);
});

// ── Confirm button ──────────────────────────────────────────────────
captchaConfirm.addEventListener('click', async () => {
    const userAnswer = parseInt(mathAnswer.value, 10);

    if (isNaN(userAnswer)) {
        captchaError.textContent = '⚠ Por favor, ingresa tu respuesta.';
        mathAnswer.focus();
        return;
    }

    if (userAnswer !== mathCorrectAnswer) {
        captchaError.textContent = '✗ Respuesta incorrecta. Inténtalo de nuevo.';
        mathAnswer.value = '';
        generateMathChallenge();
        setTimeout(() => mathAnswer.focus(), 50);
        return;
    }

    // Correct! Capture data BEFORE closing (closeCaptchaModal sets pendingFormData = null)
    const dataToSend = pendingFormData;
    closeCaptchaModal();
    await sendFormData(dataToSend || {});
});

// Allow pressing Enter in the math input to confirm
mathAnswer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') captchaConfirm.click();
});

// ── Cancel / close ──────────────────────────────────────────────────
captchaClose.addEventListener('click', closeCaptchaModal);
captchaCancel.addEventListener('click', closeCaptchaModal);
captchaOverlay.addEventListener('click', (e) => {
    if (e.target === captchaOverlay) closeCaptchaModal();
});

// =====================================================
// PARALLAX EFFECT ON SCROLL
// =====================================================
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

const parallaxElements = document.querySelectorAll('.sphere-container');

const handleParallax = debounce(() => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach(element => {
        const speed = 0.3;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}, 10);

window.addEventListener('scroll', handleParallax);

// =====================================================
// GLOW EFFECT ON MOUSE MOVE (DESKTOP ONLY)
// =====================================================
if (window.innerWidth > 1023) {
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.glass-card');

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
            }
        });
    });
}

// =====================================================
// LOGO CLICK TO TOP
// =====================================================
document.querySelector('.logo-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =====================================================
// PRELOAD ANIMATIONS
// =====================================================
window.addEventListener('load', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');

    // Trigger hero animations
    const heroElements = document.querySelectorAll('.hero-label, .hero-title, .hero-subtitle, .hero-cta, .hero-stats, .hero-visual');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, index * 100);
    });
});

// =====================================================
// RESIZE HANDLER
// =====================================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reset flip cards on resize (class-based approach)
        flipCards.forEach(card => card.classList.remove('is-flipped'));
    }, 250);
});

// =====================================================
// CONSOLE EASTER EGG
// =====================================================
console.log('%c🌶️ Pepper Inc', 'color: #22C55E; font-size: 24px; font-weight: bold;');
console.log('%cInfraestructura Tecnológica de Clase Mundial', 'color: #A1A1AA; font-size: 14px;');
console.log('%c¿Buscas talento tech? Contáctanos: info@pepperinc.net', 'color: #22C55E; font-size: 12px;');
