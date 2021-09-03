const array = [{nome: 'fulano', idade: 5}, {nome: 'sicrano', idade: 10}, {nome: 'pessoa2', idade: 10}]

let resultado = array.map(pessoa => pessoa.idade).reduce((acc, val) => {
    if (acc[val]) {
        acc[val]++
    } else {
        acc[val] = 1
    }
    return acc;
}, {})

console.log(resultado)

let res = array.reduce((a, b) => {
    return a + b.idade
}, 0)

//console.log(res)

const characters = [
    { name: 'Jean-Luc Picard', age: 59 },
    { name: 'Will Riker', age: 29 },
    { name: 'Deanna Troi', age: 29 }
];

const reducer = (map, val) => {
    if (map[val] == null) {
        map[val] = 1;
    } else {
        ++map[val];
    }
    return map;
};
let reduce = characters.map(char => char.age).reduce(reducer, {});

console.log(reduce)
