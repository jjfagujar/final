let currentRemoveIndex = -1; // Store index of employee to remove

// Show confirmation modal
function confirmRemoveEmployee(index) {
    currentRemoveIndex = index; // Set the index of the employee to be removed
    const modal = document.getElementById('confirmationModal');
    const message = document.getElementById('confirmationMessage');
    message.innerHTML = `Are you sure you want to remove ${employees[index].name}?`;
    modal.style.display = 'flex'; // Show modal
}

// Handle Yes button click
document.getElementById('confirmYes').onclick = function() {
    if (currentRemoveIndex !== -1) {
        employees.splice(currentRemoveIndex, 1); // Remove employee from array
        updateEmployeeTable(); // Update table
    }
    closeModal(); // Close the modal
};

// Handle No button click
document.getElementById('confirmNo').onclick = function() {
    closeModal(); // Just close the modal without removing
};

// Close the modal
function closeModal() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'none'; // Hide modal
}

// Existing function to remove all employees
function removeAllEmployees() {
    if (confirm('Are you sure you want to remove all employees?')) {
        employees = [];
        updateEmployeeTable();
        document.getElementById('result').innerHTML = '';
    }
}
