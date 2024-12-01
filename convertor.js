// Temperature Conversion
function convertTemperature() {
    const tempInput = document.getElementById('temp-input');
    const tempFromUnit = document.getElementById('temp-from-unit');
    const tempResult = document.getElementById('temp-result');
    
    const input = parseFloat(tempInput.value);
    
    if (isNaN(input)) {
        tempResult.textContent = 'Please enter a valid number';
        return;
    }
    
    let result;
    if (tempFromUnit.value === 'celsius') {
        // Celsius to Fahrenheit
        result = (input * 9/5) + 32;
        tempResult.textContent = `${input}°C = ${result.toFixed(2)}°F`;
    } else {
        // Fahrenheit to Celsius
        result = (input - 32) * 5/9;
        tempResult.textContent = `${input}°F = ${result.toFixed(2)}°C`;
    }
}

// Length Conversion
function convertLength() {
    const lengthInput = document.getElementById('length-input');
    const lengthFromUnit = document.getElementById('length-from-unit');
    const lengthResult = document.getElementById('length-result');
    
    const input = parseFloat(lengthInput.value);
    
    if (isNaN(input)) {
        lengthResult.textContent = 'Please enter a valid number';
        return;
    }
    
    let result;
    if (lengthFromUnit.value === 'meters') {
        // Meters to Feet
        result = input * 3.28084;
        lengthResult.textContent = `${input} m = ${result.toFixed(2)} ft`;
    } else {
        // Feet to Meters
        result = input / 3.28084;
        lengthResult.textContent = `${input} ft = ${result.toFixed(2)} m`;
    }
}
