const readLine = require('readline')

function obterResposta(pergunta) {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

function namorada() {
    console.log('N: Apagas as luzes')
    console.log('N: Pedir silêncio')
    console.log('N: Surpresa')
}

function sindico(evento) {
    console.log('S: Monitorando barulho')
    console.log(evento.resp)
    console.log(evento.data)
}

async function porteiro(interessados) {
    while (true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q)')
        if (resp.toLowerCase() === 's') {
            (interessados || []).forEach(obs => obs({ resp, data: Date.now() }))
        } else if (resp.toLowerCase() === 'q') {
            break;
        }
    }
}

porteiro([namorada, sindico])
