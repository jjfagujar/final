function calculatePayroll() {
    // Get input values
    const employeeName = document.getElementById('employeeName').value;
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
    
    // Validate inputs
    if (!employeeName || isNaN(hourlyRate) || isNaN(hoursWorked)) {
        document.getElementById('result').textContent = 'Please fill in all fields correctly.';
        return;
    }
    
    // Calculate pay
    const regularHours = Math.min(hoursWorked, 40);
    const overtimeHours = Math.max(hoursWorked - 40, 0);
    
    const regularPay = regularHours * hourlyRate;
    const overtimePay = overtimeHours * (hourlyRate * 1.5);
    
    const grossPay = regularPay + overtimePay;
    
    // Display result
    document.getElementById('result').textContent = 
        `${employeeName}'s Payroll Breakdown:\n` +
        `Regular Pay (${regularHours} hrs): $${regularPay.toFixed(2)}\n` +
        `Overtime Pay (${overtimeHours} hrs): $${overtimePay.toFixed(2)}\n` +
        `Gross Pay: $${grossPay.toFixed(2)}`;
}
