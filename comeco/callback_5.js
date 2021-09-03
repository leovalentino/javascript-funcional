const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

const totalGeral = carrinho
    .map(item => item.qtde * item.preco)
    .reduce((a, b) => a + b)

console.log(totalGeral)

Array.prototype.meuReduce = function(fn, inicial) {
    let acc = inicial
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i]
            continue
        }

        acc = fn(acc, this[i])
    }
    return acc
}

const totalGeral2 = carrinho
    .map(item => item.qtde * item.preco)
    .meuReduce((a, b) => a + b)

console.log(totalGeral2)
