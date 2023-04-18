document.addEventListener('DOMContentLoaded', () => {
    
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navIcon = document.getElementById('nav-icon');
    const navOverlay = document.getElementById('nav-overlay');
  
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navIcon.classList.toggle('active');
        navOverlay.classList.toggle('active');
    });
});