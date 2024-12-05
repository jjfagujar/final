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
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    // Show selected section
    const selectedSection = document.getElementById(`${sectionName}-section`);
    selectedSection.style.display = 'block';
    // Close mobile menu when a section is selected
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks.classList.contains('active')) {
        toggleMenu();
    }
}

// Function to load project
function loadProject(projectName) {
    const projectContent = document.getElementById('project-content');
    const projectIframeContainer = document.getElementById('project-iframe-container');
    const projectIframe = document.getElementById('project-iframe');
    const projectsSection = document.getElementById('projects-section');
    
    // Hide project links and "Projects" text
    projectContent.style.display = 'none';
    projectsSection.querySelector('h2').style.display = 'none';
    
    // Show iframe container
    projectIframeContainer.style.display = 'block';
    
    // Load specific project
    if (projectName === 'convertor') {
        projectIframe.src = 'convertor.html';
    } else if (projectName === 'income-tax') {
        projectIframe.src = 'income-tax.html';
    } else if (projectName === 'natural-numbers') {
        projectIframe.src = 'natural-numbers.html';
    } else if (projectName === 'payroll') {
        projectIframe.src = 'payroll.html';
    }
}

function closeProject() {
    const projectContent = document.getElementById('project-content');
    const projectIframeContainer = document.getElementById('project-iframe-container');
    const projectsSection = document.getElementById('projects-section');
    
    // Hide iframe
    projectIframeContainer.style.display = 'none';
    
    // Show project links and "Projects" text
    projectContent.style.display = 'block';
    projectsSection.querySelector('h2').style.display = 'block';
}

// Initialize: Show home section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    // Add event listener to close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        const navbarLinks = document.querySelector('.navbar-links');
        const burgerMenu = document.querySelector('.burger-menu');
        
        if (navbarLinks.classList.contains('active') && 
            !navbarLinks.contains(event.target) && 
            !burgerMenu.contains(event.target)) {
            toggleMenu();
        }
    });
    // Responsive navbar handling
    window.addEventListener('resize', () => {
        const navbarLinks = document.querySelector('.navbar-links');
        const burgerMenu = document.querySelector('.burger-menu');
        // Check if the screen is large or small
        if (window.innerWidth > 768) {
            // On large screens, ensure the navbar is visible and reset it to default state
            navbarLinks.classList.remove('active');
            navbarLinks.style.removeProperty('display'); // Let CSS take care of layout
        } else {
            // On small screens, navbar will be hidden until toggled
            navbarLinks.style.display = ''; // Ensure it is shown when toggled
        }
    });
});
