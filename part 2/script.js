// Tip Calculator
function calculateTip() {
    const amountPaid = parseFloat(document.getElementById('amount-paid').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);

    if (isNaN(amountPaid) || isNaN(tipPercentage)) {
        document.getElementById('tip-result').textContent = 'Please enter valid numbers.';
        return;
    }

    const tipAmount = amountPaid * (tipPercentage / 100);
    const totalAmount = amountPaid + tipAmount;
    const result = `The tip amount is $${tipAmount.toFixed(2)} and the total amount is $${totalAmount.toFixed(2)}.`;
    document.getElementById('tip-result').textContent = result;
}

// Bill Tip Calculation based on custom rule
function calculateBillTip() {
    const billValue = parseFloat(document.getElementById('bill-value').value);

    if (isNaN(billValue)) {
        document.getElementById('bill-tip-result').textContent = 'Please enter a valid number.';
        return;
    }

    const tip = billValue >= 30 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
    const totalValue = billValue + tip;
    const result = `The bill was ${billValue}, the tip was ${tip.toFixed(2)}, and the total value ${totalValue.toFixed(2)}`;
    document.getElementById('bill-tip-result').textContent = result;
    console.log(result);
}

// Modal Functionality for Tip Suggestions
document.querySelectorAll('.modal-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tipPercentage = button.getAttribute('data-tip');
        document.getElementById('suggestion-text').textContent = `We suggest a ${tipPercentage}% tip.`;
        document.getElementById('apply-suggestion').setAttribute('data-tip', tipPercentage);
        document.getElementById('modal').style.display = 'block';
    });
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('apply-suggestion').addEventListener('click', () => {
    const tipPercentage = document.getElementById('apply-suggestion').getAttribute('data-tip');
    document.getElementById('tip-percentage').value = tipPercentage;
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Test Data for Bill Tip Calculation
const testBills = [200, 28, 430];
testBills.forEach(bill => {
    const tip = bill >= 30 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    const totalValue = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${totalValue.toFixed(2)}`);
});