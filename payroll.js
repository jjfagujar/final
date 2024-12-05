// Array to store employee data
let employees = [];
let employeeToRemoveIndex = -1; // Variable to store the index of employee to be removed

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

    // Show the modal
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
}

function cancelRemoveEmployee() {
    // Hide the modal without removing the employee
    document.getElementById('confirmationModal').style.display = 'none';
    employeeToRemoveIndex = -1; // Reset index
}

function removeAllEmployees() {
    if (confirm('Are you sure you want to remove all employees?')) {
        employees = [];
        updateEmployeeTable();
        document.getElementById('result').innerHTML = '';
    }
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
document.getElementById('confirmYes').addEventListener('click', removeEmployee);
document.getElementById('confirmNo').addEventListener('click', cancelRemoveEmployee);
