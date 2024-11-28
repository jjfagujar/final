let menuOpen = false;

function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const burgerMenu = document.querySelector('.burger-menu');
    
    menuOpen = !menuOpen;
    
    if (menuOpen) {
        navbarLinks.style.display = 'flex';
        burgerMenu.classList.add('active');
    } else {
        navbarLinks.style.display = 'none';
        burgerMenu.classList.remove('active');
    }
}

function showSection(section) {
    // Hide all sections
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('projects-section').style.display = 'none';
    document.getElementById('contacts-section').style.display = 'none';

    // Show selected section
    document.getElementById(section + '-section').style.display = 'block';

    // Close mobile menu if open
    if (menuOpen) {
        toggleMenu();
    }
}

function openConvertor() {
    alert('Please note: The actual Convertor project content needs to be added.');
    // You can replace this with actual project opening logic
}
