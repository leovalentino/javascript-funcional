const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
]

// 1. fragil: true
let valor = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce((a, b) => {
        const novaQtde = a.qtde + 1
        const novoTotal = a.total + b
       return {
           qtde: a.qtde + 1,
           total: a.total + b,
           media: novoTotal / novaQtde
       }
    }, {qtde: 0, total: 0, media: 0})
// 2. qtde * preco -> total
// 3. media dos valores totais

console.log(valor.media)
