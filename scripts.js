document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(section => {
        observer.observe(section);
    });

    // Navbar Side Collapse
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarSideCollapse = document.getElementById('navbarSideCollapse');

    navbarToggler.addEventListener('click', () => {
        navbarSideCollapse.classList.toggle('show');
        document.body.classList.toggle('sidebar-open');
    });

    // Close sidebar when a nav-link is clicked
    document.querySelectorAll('#navbarSideCollapse .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navbarSideCollapse.classList.remove('show');
            document.body.classList.remove('sidebar-open');
        });
    });
});

window.addEventListener('scroll', function () {
    const heroSection = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    const fadeStart = 100;
    const fadeEnd = 400;
    
    if (scrollPosition >= fadeStart && scrollPosition <= fadeEnd) {
        const opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        heroSection.querySelector('::before').style.opacity = opacity;
    } else if (scrollPosition < fadeStart) {
        heroSection.querySelector('::before').style.opacity = 1;
    } else {
        heroSection.querySelector('::before').style.opacity = 0;
    }
});
