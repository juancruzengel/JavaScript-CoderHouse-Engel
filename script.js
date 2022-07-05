// function sumar(primerNumero,segundoNumero) {
//             return primerNumero + segundoNumero
// }

// function restar(primerNumero,segundoNumero) {
//             return primerNumero - segundoNumero
// }            

// function multiplicar(primerNumero,segundoNumero) {
//             return primerNumero * segundoNumero
// }   

// function dividir(primerNumero,segundoNumero) {
//             return primerNumero / segundoNumero         
//     }


// let primerNumero = parseFloat(prompt("Ingrese un numero"))
// let segundoNumero = parseFloat(prompt("Ingrese otro numero"))

const sumar = (num1, num2) => num1 + num2
const restar = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

let numero1, numero2, operacion

do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion")

    if(isNaN(numero1) || isNaN(numero2)) {
        alert("Porfavor ingresar un numero valido")
    }

    if(numero2 === 0 && operacion === "/"){
        alert("No se puede dividir entre ceros")
    }
}while((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operacion === "/"))

switch(operacion) {
    case "+":
        alert(sumar(numero1, numero2))
        break
    case "-":
        alert(restar(numero1, numero2))
        break
    case "*":
        alert(multiplicar(numero1, numero2))
        break
    case "/":
        alert(dividir(numero1, numero2))
        break
    default:
        alert("Operacion no valida")
        break
}