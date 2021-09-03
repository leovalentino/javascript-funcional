const letrasAnihadas = [
    ['o', ['l'], 'a'],
    [' '],
    ['m', 'u', 'n', 'd', 'o'],
    ['!', '!', '!']
]

const letras = letrasAnihadas.flat(Infinity)

const resultado = letras
    .flatMap(l => [l, ','])
    .reduce((a, b) => a + b)

console.log(resultado)
