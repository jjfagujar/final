document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const incomeInput = document.getElementById('income');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', calculateTax);

    function calculateTax() {
        const income = parseFloat(incomeInput.value);

        if (isNaN(income) || income <= 0) {
            resultDiv.innerHTML = 'Please enter a valid income amount.';
            return;
        }

        let basicTax = 0;
        let taxRate = 0;
        let taxableAmount = 0;

        if (income <= 250000) {
            basicTax = 0;
            taxRate = 0;
        } else if (income <= 400000) {
            basicTax = 0;
            taxRate = 0.20;
            taxableAmount = income - 250000;
        } else if (income <= 800000) {
            basicTax = 30000;
            taxRate = 0.25;
            taxableAmount = income - 400000;
        } else if (income <= 2000000) {
            basicTax = 130000;
            taxRate = 0.30;
            taxableAmount = income - 800000;
        } else if (income <= 8000000) {
            basicTax = 490000;
            taxRate = 0.32;
            taxableAmount = income - 2000000;
        } else {
            basicTax = 2410000;
            taxRate = 0.35;
            taxableAmount = income - 8000000;
        }

        const taxAmount = basicTax + (taxableAmount * taxRate);

        resultDiv.innerHTML = `
            <p>Annual Income: PHP ${income.toLocaleString()}</p>
            <p>Basic Tax: PHP ${basicTax.toLocaleString()}</p>
            <p>Tax Rate: ${taxRate * 100}%</p>
            <p><strong>Total Income Tax: PHP ${taxAmount.toLocaleString()}</strong></p>
        `;
    }
});
