// Toggle mobile menu
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
    const burgerLines = document.querySelectorAll('.burger-line');
    burgerLines.forEach((line, index) => {
        if (navbarLinks.classList.contains('active')) {
            line.style.transition = 'all 0.3s ease';
            if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) line.style.opacity = '0';
            if (index === 2) line.style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            line.style.transform = '';
            line.style.opacity = '1';
        }
    });
}

// Show specific sections
function showSection(sectionName) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(`${sectionName}-section`).style.display = 'block';
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks.classList.contains('active')) toggleMenu();
}

// Load specific project
function loadProject(projectName) {
    const projectContent = document.getElementById('project-content');
    const projectIframeContainer = document.getElementById('project-iframe-container');
    const projectIframe = document.getElementById('project-iframe');
    projectContent.style.display = 'none';
    document.getElementById('projects-section').querySelector('h2').style.display = 'none';
    projectIframeContainer.style.display = 'block';

    const projectMapping = {
        'convertor': 'convertor.html',
        'income-tax': 'income-tax.html',
        'natural-numbers': 'natural-numbers.html'
    };
    projectIframe.src = projectMapping[projectName] || '404.html';
}

// Close project
function closeProject() {
    document.getElementById('project-iframe-container').style.display = 'none';
    document.getElementById('project-content').style.display = 'block';
    document.getElementById('projects-section').querySelector('h2').style.display = 'block';
}

// Initialize default behaviors
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    document.addEventListener('click', event => {
        const navbarLinks = document.querySelector('.navbar-links');
        const burgerMenu = document.querySelector('.burger-menu');
        if (navbarLinks.classList.contains('active') &&
            !navbarLinks.contains(event.target) &&
            !burgerMenu.contains(event.target)) {
            toggleMenu();
        }
    });
});
