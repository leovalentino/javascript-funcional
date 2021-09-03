function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            //console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

function retornarValor() {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(10), 1000)
    })
}

//retorna promise também
async function retornarValorRapido() {
    return 10
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)
}

executar()
