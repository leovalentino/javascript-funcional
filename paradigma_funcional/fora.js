const x = 3

function fora() {
    const x = 97
    function somarMais3() {
        return x + 3
    }
    return somarMais3
}

module.exports = fora()
