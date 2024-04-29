function calcularSalario() {
    let ganhoPorHora = parseFloat(document.getElementById("ganhoPorHora").value);
    let horasTrabalhadas = parseInt(document.getElementById("horasTrabalhadas").value);
    let salario = ganhoPorHora * horasTrabalhadas;
    
    document.getElementById("resultado").innerHTML = "Seu salário no mês é de R$ " + salario.toFixed(2);
}