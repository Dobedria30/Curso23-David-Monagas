let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));
let operador = prompt("Ingrese el operador (suma, resta, multiplicacion o division):");

function calculadora( num1, num2, operador) {
  if (operador === "suma") {
    return ( num1 + num2);
  } else if (operador === "resta") {
    return ( num1 - num2);
  } else if (operador === "multiplicacion") {
    return ( num1 * num2);
  } else if (operador === "division") {
    if (num2 !== 0) {
      return ( num1 / num2);
    } else {
      return ("Error: División por cero");
    }
  } else {
    return ("Error: Operador no válido");
  }
}

console.log(calculadora(num1, num2, operador)); // Llamada a la función con los números y el operador ingresados