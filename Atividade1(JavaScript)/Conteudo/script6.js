function calcularArea() {
    let raio = parseFloat(document.getElementById('raio').value);
    let area = Math.PI * Math.pow(raio, 2);

    document.getElementById('resultado').innerText = "A área do círculo é: " + area.toFixed(2) + " unidades quadradas.";
}