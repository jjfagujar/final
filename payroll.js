// Array to store employee data
let employees = [];
let employeeToRemoveIndex = -1; // Variable to store the index of employee to be removed
let isRemoveAll = false; // Variable to track if "Delete All" is triggered

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
    tableBody.innerHTML = ''; // Clear the table before updating

    employees.forEach((employee, index) => {
        const row = `
            <tr>
                <td>${employee.name}</td>
                <td>$${employee.hourlyRate.toFixed(2)}</td>
                <td>${employee.hoursWorked.toFixed(2)}</td>
                <td>$${employee.grossPay.toFixed(2)}</td>
                <td><button class="remove-btn" onclick="confirmRemoveEmployee(${index})">Remove</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function confirmRemoveEmployee(index) {
    // Store the index of the employee to be removed
    employeeToRemoveIndex = index;
    isRemoveAll = false; // Reset remove all flag

    // Update modal text for single employee removal
    document.getElementById('modalText').textContent = `Are you sure you want to delete ${employees[index].name}?`;

    // Show the modal
    document.getElementById('confirmationModal').style.display = 'block';
}

function confirmRemoveAllEmployees() {
    // Set the flag to indicate delete all employees
    isRemoveAll = true;

    // Update modal text for removing all employees
    document.getElementById('modalText').textContent = "Are you sure you want to delete all employees?";

    // Show the modal for confirming the delete all action
    document.getElementById('confirmationModal').style.display = 'block';
}

function removeEmployee() {
    if (employeeToRemoveIndex >= 0) {
        // Remove the employee from the array
        employees.splice(employeeToRemoveIndex, 1);
        updateEmployeeTable();
    }

    // Hide the modal
    document.getElementById('confirmationModal').style.display = 'none';
    employeeToRemoveIndex = -1; // Reset index
    isRemoveAll = false; // Reset remove all flag
}

function removeAllEmployees() {
    // Clear all employees if the flag is set to true
    if (isRemoveAll) {
        employees = [];
        updateEmployeeTable();
        document.getElementById('result').innerHTML = '';
    }

    // Hide the modal
    document.getElementById('confirmationModal').style.display = 'none';
    isRemoveAll = false; // Reset remove all flag
}

function cancelRemoveEmployee() {
    // Hide the modal without removing anything
    document.getElementById('confirmationModal').style.display = 'none';
    employeeToRemoveIndex = -1; // Reset index
    isRemoveAll = false; // Reset remove all flag
}

function calculateTotalPayroll() {
    const totalGrossPay = employees.reduce((total, employee) => total + employee.grossPay, 0);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Total Employees: ${employees.length}<br>
        Total Payroll: $${totalGrossPay.toFixed(2)}
    `;
}

// Add event listeners for modal buttons
document.getElementById('confirmYes').addEventListener('click', () => {
    if (isRemoveAll) {
        removeAllEmployees();
    } else {
        removeEmployee();
    }
});
document.getElementById('confirmNo').addEventListener('click', cancelRemoveEmployee);




