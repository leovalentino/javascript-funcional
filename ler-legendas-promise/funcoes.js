const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise(resolve => {
        let arquivos = fs.readdirSync(caminho)
        arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
        resolve(arquivos)
    })
}

function lerArquivo(caminho) {
        return new Promise(((resolve, reject) => {
            try {
                const conteudo = fs.readFileSync(caminho, {encoding: 'utf8'})
                resolve(conteudo.toString())
            } catch (e) {
                reject(e)
            }
        }))
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(padraoTextual) {
    return function(array) {
        return array.filter(el => el.endsWith(padraoTextual))
    }
}

function removerElementosSeIncluir(padraoTextual) {
    return function(array) {
        return array.filter(el => !el.includes(padraoTextual))
    }
}

function removerSeVazio(array) {
    return array.filter(el => el.trim())
}

function removerSeApenasNumerico(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function mesclarElementos (array) {
    return array.join(' ');
}

function separarTextoPor(simbolo) {
    return function(texto) {
        return texto.split(simbolo)
    }
}

function removerSimbolos(simbolos) {
    return function(array) {
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) => {
              return acc.split(simbolo).join('')
            }, el)
        })
    }
}

function agruparElementos(palavras) {
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1
        acc[el] = { elmento: el, qtde }
        return acc
    }, {}))
}

function ordenarPorAtributoNumerico(attr, ordem = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return [...array].sort(ordem === 'asc' ? asc : desc)
    }
}

function composicao(...fns) {
    return function(valor) {
        return fns.reduce(async (acc, fn) => {
            try {
                if (Promise.resolve(acc) === acc) {
                    return fn(await acc)
                } else {
                    return fn(acc)
                }
            } catch (e) {
                console.log(e)
            }
        }, valor)
    }
}

module.exports = {
    composicao,
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerminadosCom,
    removerElementosSeVazio: removerSeVazio,
    removerElementosSeIncluir,
    removerSeApenasNumerico,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor,
    agruparElementos,
    ordenarPorAtributoNumerico
}
