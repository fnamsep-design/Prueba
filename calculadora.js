function calculadora() {
  let opcion;
  do {
    opcion = prompt(
      "Calculadora v1\n\n" +
      "a) Suma\n" +
      "b) Resta\n" +
      "c) Multiplicación\n" +
      "d) División\n" +
      "e) Potencia\n" +
      "f) División entera\n" +
      "g) Resto\n" +
      "h) Evaluar expresión\n" +
      "q) Salir\n\n" +
      "Elige una opción:"
    );

    if (opcion === "q") {
      alert("Hasta luego 😼");
      break;
    }

    if (opcion === "h") {
      let expr = prompt("Escribe la expresión (ej: 2+3*4):");
      try {
        let res = eval(expr);
        alert("Resultado: " + res);
      } catch {
        alert("Expresión inválida");
      }
      continue;
    }

    // Para las demás operaciones se piden dos números
    let n1 = parseFloat(prompt("Ingresa el primer número:"));
    let n2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (isNaN(n1) || isNaN(n2)) {
      alert("Debes ingresar números válidos.");
      continue;
    }

    let resultado;
    switch (opcion) {
      case "a":
        resultado = n1 + n2;
        break;
      case "b":
        resultado = n1 - n2;
        break;
      case "c":
        resultado = n1 * n2;
        break;
      case "d":
        if (n2 === 0) {
          alert("No se puede dividir entre 0");
          continue;
        }
        resultado = n1 / n2;
        break;
      case "e":
        resultado = Math.pow(n1, n2);
        break;
      case "f":
        resultado = Math.floor(n1 / n2);
        break;
      case "g":
        resultado = n1 % n2;
        break;
      default:
        alert("Opción no válida");
        continue;
    }

    alert("Resultado: " + resultado);

  } while (true);
}