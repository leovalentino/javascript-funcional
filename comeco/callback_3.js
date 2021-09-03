const nums = [1,2,3,4,5]
const dobro = (n) => n * 2
console.log(nums.map(dobro))

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

console.log(carrinho.map(item => item.nome).filter())
console.log(carrinho.map(item => item.qtde * item.preco))

Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))
