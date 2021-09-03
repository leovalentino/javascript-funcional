function composicao1(...fns) {
    return function(valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!!`
}

function tornarLento(texto) {
    return texto.split('').join(' ')
}

const resultado = composicao1(
    gritar,
    enfatizar,
    tornarLento
)

const umPoucoMenosExagerado = composicao1(
    gritar,
    enfatizar
)

console.log(resultado('para'))
console.log(umPoucoMenosExagerado('Cuidado com o buraco!'))
