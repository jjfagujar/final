// Array to store employee data
let employees = [];

// Show confirmation modal
let currentRemoveIndex = -1; // Store index of employee to remove
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

function addEmployee() {
    const employeeName = document.getElementById('employeeName').value;
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);

    if (!employeeName || isNaN(hourlyRate) || isNaN(hoursWorked)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const regularHours = Math.min(hoursWorked, 40);
    const overtimeHours = Math.max(hoursWorked - 40, 0);
    
    const regularPay = regularHours * hourlyRate;
    const overtimePay = overtimeHours * (hourlyRate * 1.5);
    
    const grossPay = regularPay + overtimePay;

    const employee = {
        name: employeeName,
        hourlyRate: hourlyRate,
        hoursWorked: hoursWorked,
        grossPay: grossPay
    };

    employees.push(employee);
    updateEmployeeTable();

    document.getElementById('employeeName').value = '';
    document.getElementById('hourlyRate').value = '';
    document.getElementById('hoursWorked').value = '';
}

function updateEmployeeTable() {
    const tableBody = document.getElementById('employeeTableBody');
    tableBody.innerHTML = '';

    employees.forEach((employee, index) => {
        const row = `
            <tr>
                <td>${employee.name}</td>
                <td>$${employee.hourlyRate.toFixed(2)}</td>
                <td>${employee.hoursWorked.toFixed(2)}</td>
                <td>$${employee.grossPay.toFixed(2)}</td>
                <td><button class="remove-btn" onclick




