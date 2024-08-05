
// Part A: BMI Comparison
function compareBMI() {
    const lucasBMI = parseFloat(document.getElementById('lucas-bmi').value);
    const peterBMI = parseFloat(document.getElementById('peter-bmi').value);
  
    const lucasHigherBMI = lucasBMI > peterBMI;
  
    document.getElementById('bmi-result').innerText = `Lucas's BMI: ${lucasBMI}, Peter's BMI: ${peterBMI}, Peter's BMI is higher: ${lucasHigherBMI}`;
  }
  
  // Part B: Temperature Converter
  function convertTemperature() {
    const celsiusTemp = parseFloat(document.getElementById('celsius-temp').value);
    const fahrenheitTemp = celsiusTemp * 9/5 + 32;
  
    document.getElementById('temp-result').innerText = `${celsiusTemp}°C is ${fahrenheitTemp}°F`;
  }
  