document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const nav = document.querySelector('nav');

    if (!menuBtn || !closeBtn || !nav) {
        console.error('One or more elements not found: menuBtn, closeBtn, or nav');
        return;
    }

    menuBtn.addEventListener('click', function() {
        nav.classList.add('show');
        console.log('Nav opened'); // Optional: for debugging
    });

    closeBtn.addEventListener('click', function() {
        nav.classList.remove('show');
        console.log('Nav closed'); // Optional: for debugging
    });
});