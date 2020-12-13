let menuOpen = false;
toggle.addEventListener('click', () => {
    const menuContent = document.querySelector('#menu-content');
    menuOpen = !menuOpen;
    if (menuOpen) {
        menuContent.classList.add('active');
    } else {
        menuContent.classList.remove('active');
    }
});