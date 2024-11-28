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
    const sections = [
        'home-section', 
        'projects-section', 
        'contacts-section'
    ];
    
    sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        sectionElement.style.display = 'none';
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

// Function to open convertor (placeholder for now)
function openConvertor() {
    alert('Convertor functionality will be implemented soon!');
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

        // Reset navbar on larger screens
        if (window.innerWidth > 768) {
            navbarLinks.classList.remove('active');
            // Remove inline style to let CSS take over
            navbarLinks.style.removeProperty('display');
        }
    });
});
