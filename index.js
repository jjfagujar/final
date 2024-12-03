// Function to toggle mobile menu
function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
    // Toggle burger menu animation
    const burgerLines = document.querySelectorAll('.burger-line');
    burgerLines.forEach((line, index) => {
        line.style.transition = 'all 0.3s ease';
        
        // Animate burger menu to 'X' when open
        if (navbarLinks.classList.contains('active')) {
            switch(index) {
                case 0:
                    line.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    break;
                case 1:
                    line.style.opacity = '0';
                    break;
                case 2:
                    line.style.transform = 'rotate(-45deg) translate(5px, -5px)';
                    break;
            }
        } else {
            // Reset burger menu lines
            line.style.transform = 'none';
            line.style.opacity = '1';
        }
    });
}

// Function to show specific sections
function showSection(sectionName) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(`${sectionName}-section`).style.display = 'block';
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks.classList.contains('active')) {
        toggleMenu();
    }
}

// Function to open a project
function loadProject(projectName) {
    const projectContent = document.getElementById('project-content');
    const projectIframeContainer = document.getElementById('project-iframe-container');
    const projectIframe = document.getElementById('project-iframe');
    projectContent.style.display = 'none';
    projectIframeContainer.style.display = 'block';
    projectIframe.src = projectName === 'convertor' ? 'convertor.html' : 'income-tax.html';
}

// Function to close the project
function closeProject() {
    document.getElementById('project-iframe-container').style.display = 'none';
    document.getElementById('project-content').style.display = 'block';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
