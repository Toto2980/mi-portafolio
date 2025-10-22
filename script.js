
    function toggleMenu() {
        const menu = document.getElementById('nav-menu');
        menu.classList.toggle('show');
        // actualizar aria-expanded en el botón del menú
        const toggle = document.querySelector('.menu-toggle');
        if (toggle) {
            const expanded = menu.classList.contains('show');
            toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        }
    }

    function handleMenuToggleKey(event) {
        const key = event.key || event.keyCode;
        // Soporte para Enter y Space (teclas modernas y códigos)
        if (key === 'Enter' || key === ' ' || key === 'Spacebar' || key === 13 || key === 32) {
            event.preventDefault();
            toggleMenu();
        }
    }

    // Intersection Observer para efecto de fade-in
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        }
    }, { threshold: 0.1 });
    for (const el of document.querySelectorAll('.fade-in')) {
        observer.observe(el);
    }
