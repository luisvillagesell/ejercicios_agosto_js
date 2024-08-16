// Hacer el desarrollo que simule una calculadora
// básica. El programa debe pedir al usuario que
// ingrese dos números y una operación (+, -,
// *
// , /).
// Utiliza un switch para seleccionar la operación y
// dentro de cada caso, emplea el operador ternario
// para verificar si alguno de los números es cero en
// las operaciones de división o resta.

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = parseFloat(eval(document.getElementById("display").value));
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
