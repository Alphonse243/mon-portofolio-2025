// Initialisation AOS (Animation on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Spinner - Cache après le chargement
window.addEventListener('load', function() {
    const spinner = document.getElementById('spinner');
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 500);
});

// Navigation Optimisée - Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');

if (mobileMenuButton && mobileMenu && closeMenuButton) {
    // Ouvrir le menu mobile
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Animation du bouton hamburger
        mobileMenuButton.style.transform = 'rotate(90deg)';
    });

    // Fermer le menu mobile
    closeMenuButton.addEventListener('click', () => {
        closeMobileMenu();
    });

    // Fermer le menu en cliquant sur l'overlay
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });

    // Fermer le menu en cliquant sur les liens de navigation mobile
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Fonction pour fermer le menu mobile
    function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('show');
        document.body.style.overflow = 'auto';
        mobileMenuButton.style.transform = 'rotate(0deg)';
    }
}

// Navigation Scroll Effect
if (navbar) {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Ajouter/supprimer la classe 'scrolled' selon le scroll
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Typed.js - Animation du texte
const typed = new Typed('#typed-text', {
    strings: [
        'Développeur Web',
        'Infographe',
        'Coach',
        'Étudiant en Médecine',
        'Rédacteur',
        '.....'
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

// Compteur animé
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 20);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Animation des barres de compétences
const skillBars = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector('[data-width]');
            if (skillBar) {
                const width = skillBar.getAttribute('data-width');
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 100);
                skillObserver.unobserve(entry.target);
            }
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(skill => {
    skillObserver.observe(skill);
});

// Onglets Expérience/Éducation
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        // Réinitialiser tous les boutons
        tabButtons.forEach(btn => {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('bg-white', 'text-gray-700');
        });
        
        // Activer le bouton cliqué
        button.classList.remove('bg-white', 'text-gray-700');
        button.classList.add('bg-primary', 'text-white');
        
        // Afficher le contenu correspondant
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });
        
        document.getElementById(tabName).classList.remove('hidden');
    });
});

// Filtre de projet
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Réinitialiser tous les boutons
        filterButtons.forEach(btn => {
            btn.classList.remove('bg-gradient-to-r', 'from-primary-600', 'to-accent-600', 'text-white');
            btn.classList.add('text-gray-700');
        });
        
        // Activer le bouton cliqué
        button.classList.remove('text-gray-700');
        button.classList.add('bg-gradient-to-r', 'from-primary-600', 'to-accent-600', 'text-white');
        
        // Filtrer les projets avec animation
        projectItems.forEach((item, index) => {
            if (filter === 'all') {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, index * 50);
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, index * 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// Bouton Retour en haut
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
        backToTopButton.classList.add('opacity-100', 'pointer-events-auto');
    } else {
        backToTopButton.classList.add('opacity-0', 'pointer-events-none');
        backToTopButton.classList.remove('opacity-100', 'pointer-events-auto');
    }
});

// Navigation active selon le scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-primary');
        link.classList.add('text-gray-700');
        
        if (link.getAttribute('href') === '#' + current) {
            link.classList.remove('text-gray-700');
            link.classList.add('text-primary');
        }
    });
});

// Gestion des visiteurs avec localStorage
function trackVisitor() {
    // Simuler un fingerprint simple du navigateur
    const browserFingerprint = generateFingerprint();
    
    // Récupérer les données de visiteurs depuis localStorage
    let visitorsData = JSON.parse(localStorage.getItem('visitorsData')) || {
        visitors: [],
        totalVisitors: 0
    };
    
    // Vérifier si le visiteur a déjà été enregistré
    const existingVisitor = visitorsData.visitors.find(v => v.fingerprint === browserFingerprint);
    
    if (!existingVisitor) {
        // Ajouter le nouveau visiteur
        visitorsData.visitors.push({
            fingerprint: browserFingerprint,
            timestamp: new Date().toISOString()
        });
        visitorsData.totalVisitors++;
        
        // Sauvegarder dans localStorage
        localStorage.setItem('visitorsData', JSON.stringify(visitorsData));
    }
    
    // Afficher le nombre de visiteurs
    document.getElementById('visitor-count').textContent = visitorsData.totalVisitors;
}

// Générer un fingerprint simple basé sur le navigateur
function generateFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Browser Fingerprint', 2, 2);
    
    return canvas.toDataURL() + 
           navigator.userAgent + 
           navigator.language + 
           screen.colorDepth + 
           screen.width + 
           screen.height;
}

// Initialiser le suivi des visiteurs au chargement de la page
window.addEventListener('load', () => {
    trackVisitor();
});

// Formulaire de contact
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci pour votre message ! Je vous répondrai bientôt.');
        contactForm.reset();
    });
}

// Smooth scroll pour tous les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

