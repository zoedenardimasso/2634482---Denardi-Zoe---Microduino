const txtOp1 = document.getElementById("op1")
const txtOperador = document.getElementById("operador")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("Calcular")
const pResultado = document.getElementById("Resultado")

btnCalcular.addEventListener('click', Calcular)

function Calcular() {
    console.log(txtOperador.value);
    const operador = txtOperador.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if (operador == "+" || operador == "-" || operador == "*" || operador == "/") {
        let Resultado;
        switch (operador) {

            case "+":
                Resultado = op1 + op2;
                break;
            case "-":
                Resultado = op1 - op2;
                break;
            case "*":
                Resultado = op1 * op2;
                break;
            case "/":
                Resultado = op1 / op2;
                break;
        }
        pResultado.innerText = "= " + Resultado
    } else {
        pResultado.innerText = "Calculo imposible"
    }

}