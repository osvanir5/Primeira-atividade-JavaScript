function calcularSoma() {
            
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    if (!isNaN(numero1) && !isNaN(numero2)) {
        let soma = numero1 + numero2;

        document.getElementById("resultado").innerHTML = "A soma é: " + soma;
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    }
}