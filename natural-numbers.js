// Factorial Calculation using While Loop
function calculateFactorial() {
    const input = document.getElementById('factorialInput');
    const resultElement = document.getElementById('factorialResult');
    const n = parseInt(input.value);

    // Input validation
    if (isNaN(n) || n < 0) {
        resultElement.textContent = 'Please enter a positive number';
        return;
    }

    // While Loop Factorial Calculation
    let factorial = 1;
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }

    resultElement.textContent = `Factorial of ${n} is: ${factorial}`;
}

// Sum Calculation using Do-While Loop
function calculateSum() {
    const input = document.getElementById('sumInput');
    const resultElement = document.getElementById('sumResult');
    const n = parseInt(input.value);

    // Input validation
    if (isNaN(n) || n <= 0) {
        resultElement.textContent = 'Please enter a positive number';
        return;
    }

    // Do-While Loop Sum Calculation
    let sum = 0;
    let j = 1;
    do {
        sum += j;
        j++;
    } while (j <= n);

    resultElement.textContent = `Sum of first ${n} numbers is: ${sum}`;
}

// Average Calculation using For Loop
function calculateAverage() {
    const input = document.getElementById('averageInput');
    const resultElement = document.getElementById('averageResult');
    const n = parseInt(input.value);

    // Input validation
    if (isNaN(n) || n <= 0) {
        resultElement.textContent = 'Please enter a positive number';
        return;
    }

    // For Loop Average Calculation
    let sum = 0;
    for (let k = 1; k <= n; k++) {
        sum += k;
    }
    const average = sum / n;

    resultElement.textContent = `Average of first ${n} numbers is: ${average.toFixed(2)}`;
}
