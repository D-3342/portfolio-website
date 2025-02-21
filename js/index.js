const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('change');
    mobileMenu.classList.toggle('active');
});