function converterTemperatura() {
    let tempCelsius = parseFloat(document.getElementById("tempCelsius").value);
    let tempFahrenheit = (tempCelsius * 9/5) + 32;
    
    document.getElementById("resultado").innerHTML = "A temperatura em Fahrenheit é: " + tempFahrenheit.toFixed(2) + " °F";
}