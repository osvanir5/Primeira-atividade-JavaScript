function converterTemperatura() {
    let tempFahrenheit = parseFloat(document.getElementById("tempFahrenheit").value);
    let tempCelsius = 5 * ((tempFahrenheit - 32) / 9);
    
    document.getElementById("resultado").innerHTML = "A temperatura em Celsius é: " + tempCelsius.toFixed(2) + " °C";
}