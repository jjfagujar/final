document.addEventListener('DOMContentLoaded', () => {
    const taxForm = document.getElementById('tax-calculator-form');
    const taxResults = document.getElementById('tax-results');

    // 2024 Federal Tax Brackets (Simplified)
    const taxBrackets = {
        single: [
            { min: 0, max: 11000, rate: 0.10 },
            { min: 11001, max: 44725, rate: 0.12 },
            { min: 44726, max: 95375, rate: 0.22 },
            { min: 95376, max: 182100, rate: 0.24 },
            { min: 182101, max: 231250, rate: 0.32 },
            { min: 231251, max: 578125, rate: 0.35 },
            { min: 578126, max: Infinity, rate: 0.37 }
        ],
        'married-joint': [
            { min: 0, max: 22000, rate: 0.10 },
            { min: 22001, max: 89450, rate: 0.12 },
            { min: 89451, max: 190750, rate: 0.22 },
            { min: 190751, max: 364200, rate: 0.24 },
            { min: 364201, max: 462500, rate: 0.32 },
            { min: 462501, max: 693750, rate: 0.35 },
            { min: 693751, max: Infinity, rate: 0.37 }
        ]
    };

    // State tax rates (simplified)
    const stateTaxRates = {
        CA: {
            single: [
                { min: 0, max: 10099, rate: 0.01 },
                { min: 10100, max: 23942, rate: 0.02 },
                { min: 23943, max: 37788, rate: 0.04 },
                { min: 37789, max: 52455, rate: 0.06 },
                { min: 52456, max: 66295, rate: 0.08 },
                { min: 66296, max: 338639, rate: 0.09 },
                { min: 338640, max: Infinity, rate: 0.10 }
            ]
        },
        NY: {
            single: [
                { min: 0, max: 8500, rate: 0.04 },
                { min: 8501, max: 11700, rate: 0.045 },
                { min: 11701, max: 13900, rate: 0.0525 },
                { min: 13901, max: 21400, rate: 0.059 },
                { min: 21401, max: 80650, rate: 0.0597 },
                { min: 80651, max: 215400, rate: 0.0633 },
                { min: 215401, max: 1077550, rate: 0.0685 },
                { min: 1077551, max: Infinity, rate: 0.0882 }
            ]
        },
        TX: {} // No state income tax
    };

    function calculateFederalTax(income, filingStatus) {
        const brackets = taxBrackets[filingStatus];
        let totalTax = 0;

        for (let bracket of brackets) {
            if (income > bracket.min) {
                const taxableAmount = Math.min(income, bracket.max) - bracket.min;
                totalTax += taxableAmount * bracket.rate;
            }
        }

        return totalTax;
    }

    function calculateStateTax(income, state, filingStatus) {
        if (!stateTaxRates[state] || Object.keys(stateTaxRates[state]).length === 0) {
            return 0;
        }

        const brackets = stateTaxRates[state][filingStatus];
        let totalTax = 0;

        for (let bracket of brackets) {
            if (income > bracket.min) {
                const taxableAmount = Math.min(income, bracket.max) - bracket.min;
                totalTax += taxableAmount * bracket.rate;
            }
        }

        return totalTax;
    }

    taxForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const income = parseFloat(document.getElementById('annual-income').value);
        const filingStatus = document.getElementById('filing-status').value;
        const state = document.getElementById('state').value;

        const federalTax = calculateFederalTax(income, filingStatus);
        const stateTax = state !== 'federal' ? calculateStateTax(income, state, filingStatus) : 0;
        const totalTax = federalTax + stateTax;
        const effectiveTaxRate = (totalTax / income) * 100;

        taxResults.innerHTML = `
            <h3>Tax Breakdown</h3>
            <p>Annual Income: $${income.toLocaleString()}</p>
            <p>Federal Tax: $${federalTax.toLocaleString()}</p>
            <p>State Tax: $${stateTax.toLocaleString()}</p>
            <p>Total Tax: $${totalTax.toLocaleString()}</p>
            <p>Effective Tax Rate: ${effectiveTaxRate.toFixed(2)}%</p>
        `;
    });
});
