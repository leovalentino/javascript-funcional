// Functors são objetos que implementam a função MAP
// que também é um wrapper de um valor

function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if (this.invalido()) {
                return TipoSeguro(null)
            } else {
                const novoValor = fn(this.valor)
                return TipoSeguro(novoValor)
            }
        },
        flatMap(fn) {
            return this.map(fn).valor
        }
    }
}

const original = 'Valor seguro'
const resultado = TipoSeguro(original)
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!`)
    .flatMap(t => t.split('').join(' '))

console.log(resultado)
