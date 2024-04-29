function converterParaCentimetros() {
    let metro = parseFloat(document.getElementById('metro').value);
    let centimetros = metro * 100;

    document.getElementById('resultado').innerText = metro + " metros são " + centimetros.toFixed(2) + " centímetros.";
}