// Existing code remains the same...

// Modify loadProject function to support Income Tax Calculator
function loadProject(projectName) {
    const projectContent = document.getElementById('project-content');
    const projectIframeContainer = document.getElementById('project-iframe-container');
    const projectIframe = document.getElementById('project-iframe');
    
    // Hide all sections first
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Hide project links
    projectContent.style.display = 'none';
    
    // Load specific project
    if (projectName === 'convertor') {
        projectIframeContainer.style.display = 'block';
        projectIframe.src = 'convertor.html';
    } else if (projectName === 'income-tax') {
        // Directly show the income tax section
        const incomeTaxSection = document.getElementById('income-tax-section');
        incomeTaxSection.style.display = 'block';
    }
}

// Modify closeProject function to work with Income Tax Calculator
function closeProject() {
    const projectContent = document.getElementById('project-content');
    const projectIframeContainer = document.getElementById('project-iframe-container');
    const incomeTaxSection = document.getElementById('income-tax-section');
    
    // Hide iframe and income tax section
    projectIframeContainer.style.display = 'none';
    incomeTaxSection.style.display = 'none';
    
    // Show project links
    projectContent.style.display = 'block';
    
    // Show projects section
    const projectsSection = document.getElementById('projects-section');
    projectsSection.style.display = 'block';
}
