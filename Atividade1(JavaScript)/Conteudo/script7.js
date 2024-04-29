function calcularArea() {

    let lado = parseFloat(document.getElementById("lado").value);
    let area = lado * lado;
    let dobroArea = 2 * area;
    
    document.getElementById("resultado").innerHTML = "Área do quadrado: " + area + "<br>Dobro da área: " + dobroArea;
  }