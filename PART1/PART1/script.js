// Part A: BMI Comparison

function compareBMI() {
    // Step 1: Store the mass and height of Lucas and Peter
    const lucasMass = parseFloat(document.getElementById('lucas-mass').value);
    const lucasHeight = parseFloat(document.getElementById('lucas-height').value);
    const peterMass = parseFloat(document.getElementById('peter-mass').value);
    const peterHeight = parseFloat(document.getElementById('peter-height').value);

    // Step 2: Calculate their BMI
    const lucasBMI = lucasMass / (lucasHeight * lucasHeight);
    const peterBMI = peterMass / (peterHeight * peterHeight);

    // Step 3: Compare their BMI and store result
    const lucasHigherBMI = lucasBMI > peterBMI;

    // Step C: Print a nice output to the console
    if (lucasHigherBMI) {
        console.log(`Lucas' BMI (${lucasBMI.toFixed(1)}) is higher than Peter’s (${peterBMI.toFixed(1)})!`);
    } else {
        console.log(`Peter's BMI (${peterBMI.toFixed(1)}) is higher than Lucas’ (${lucasBMI.toFixed(1)})!`);
    }

    // Log the BMI comparison result
    const bmiResult = `The BMI of Peter is ${peterBMI.toFixed(1)}, The BMI of Lucas is ${lucasBMI.toFixed(1)}, Peter’s BMI is higher than Lucas’s BMI that is ${!lucasHigherBMI}`;
    document.getElementById('bmi-result').textContent = bmiResult;
    console.log(bmiResult);
}

// Part B: Temperature Converter
function convertTemperature() {
    // Celsius to Fahrenheit conversion
    const celsiusTemp = parseFloat(document.getElementById('celsius-temp').value);
    const fahrenheitTempFromCelsius = (celsiusTemp * 9/5) + 32;
    const celsiusToFahrenheitResult = `${celsiusTemp}°C is ${fahrenheitTempFromCelsius.toFixed(1)}°F`;

    // Fahrenheit to Celsius conversion
    const fahrenheitTemp = parseFloat(document.getElementById('fahrenheit-temp').value);
    const celsiusTempFromFahrenheit = (fahrenheitTemp - 32) * 5/9;
    const fahrenheitToCelsiusResult = `${fahrenheitTemp}°F is ${celsiusTempFromFahrenheit.toFixed(1)}°C`;

    // Display the results
    const tempResult = `${celsiusToFahrenheitResult}, ${fahrenheitToCelsiusResult}`;
    document.getElementById('temp-result').textContent = tempResult;
    console.log(tempResult);
}

// Part D: Arrow Functions for Temperature Conversion
const convertCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit.toFixed(1)}°F`);
};

const convertFahrenheitToCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius.toFixed(1)}°C`);
};

// Testing Part D functions with sample data
convertCelsiusToFahrenheit(100);
convertCelsiusToFahrenheit(0);
convertCelsiusToFahrenheit(10);

convertFahrenheitToCelsius(32);
convertFahrenheitToCelsius(10);
convertFahrenheitToCelsius(102);
