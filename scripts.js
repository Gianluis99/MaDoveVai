// Scroll effect for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lettere che rimbalzano
const title = document.querySelector('h1');

function bounceEffect() {
    title.classList.add('bounce');
}

title.addEventListener('mouseover', bounceEffect);
title.addEventListener('animationend', () => {
    title.classList.remove('bounce');
});

// Effetto hover sui servizi
const services = document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('mouseover', () => {
        service.style.transform = 'scale(1.05)';
    });

    service.addEventListener('mouseout', () => {
        service.style.transform = 'scale(1)';
    });
});

