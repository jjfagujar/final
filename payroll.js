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
    if (confirm(`Are you sure you want to remove ${employees[index].name}?`)) {
        employees.splice(index, 1);
        updateEmployeeTable();
    }
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
