//retornar uma função a partir de uma outra função
function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

//ou
const resultadoPot = potencia(3)(4)
console.log(resultadoPot)

const soma = (n1) => (n2) => (n3) =>  n1 + n2 + n3

console.log(soma(3)(4)(5))

function calcular(n1, n2, fn) {
    return fn(n1 ,n2)
}
const fnSum = function sum(n1, n2) {
    return n1 + n2
}
console.log(calcular(5, 6, fnSum))

