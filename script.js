document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const revealItems = document.querySelectorAll('.reveal');
    const contactForm = document.getElementById('contactForm');

    function toggleMenu() {
        if (!navLinks) return;
        navLinks.classList.toggle('open');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    document.addEventListener('click', function (event) {
        if (!navLinks || !menuToggle) return;
        const target = event.target;
        if (!navLinks.contains(target) && !menuToggle.contains(target)) {
            navLinks.classList.remove('open');
        }
    });

    function revealOnScroll() {
        revealItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                item.classList.add('visible');
            }
        });
    }

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            contactForm.querySelector('button').textContent = 'Enviado!';
            setTimeout(function () {
                contactForm.reset();
                contactForm.querySelector('button').textContent = 'Enviar Mensagem';
            }, 1600);
        });
    }
});
