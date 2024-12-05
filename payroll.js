// Array to store employee data
let employees = [];

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
                <td><button class="remove-btn" onclick="confirmRemoveEmployee(${index})">Remove</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function confirmRemoveEmployee(index) {
    // Show the modal
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'block';

    // Handle the Yes action
    document.getElementById('confirmYes').onclick = function() {
        employees.splice(index, 1);
        updateEmployeeTable();
        closeModal();
    };

    // Handle the No action
    document.getElementById('confirmNo').onclick = function() {
        closeModal();
    };
}

function removeAllEmployees() {
    // Show the modal for removing all employees
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'block';

    // Handle the Yes action for removing all employees
    document.getElementById('confirmYes').onclick = function() {
        employees = [];
        updateEmployeeTable();
        document.getElementById('result').innerHTML = '';
        closeModal();
    };

    // Handle the No action for canceling
    document.getElementById('confirmNo').onclick = function() {
        closeModal();
    };
}

function calculateTotalPayroll() {
    const totalGrossPay = employees.reduce((total, employee) => total + employee.grossPay, 0);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Total Employees: ${employees.length}<br>
        Total Payroll: $${totalGrossPay.toFixed(2)}
    `;
}

function closeModal() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'none';
}

// Close modal if clicked outside of it
window.onclick = function(event) {
    const modal = document.getElementById('confirmationModal');
    if (event.target === modal) {
        closeModal();
    }
};



