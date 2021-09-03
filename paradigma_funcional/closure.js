// Closure é quando uma função "lembra"
// seu escopa léxico, mesmo quando a função
// é executada fora desse escopo léxico

const somarMais3 = require('./fora')

const x = 1000
console.log(somarMais3())
