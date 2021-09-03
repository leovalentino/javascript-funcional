const fs = require('fs')
const path = require('path')
const { Observable } = require('rxjs')

function lerDiretorio(caminho) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => {
                subscriber.next(path.join(caminho, arquivo))
            })
            subscriber.complete()
        } catch (e) {
            subscriber.error(e)
        }
    })
}

function lerArquivo() {
        return createPipeableOperator(subscriber => ({
            next(caminho) {
                try {
                    const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8'})
                    subscriber.next(conteudo.toString())
                } catch (e) {
                    subscriber.error()
                }
            }
        }))
}

function elementosTerminadosCom(padraoTextual) {
    return createPipeableOperator(subsbcriber => ({
            next(texto) {
                if (texto.endsWith(padraoTextual)) {
                    subsbcriber.next(texto)
                }
            }
        })
    )
}

function removerElementosSeVazio() {
    return createPipeableOperator(subsbcriber => ({
            next(texto) {
                if (texto.trim()) {
                    subsbcriber.next(texto)
                }
            }
        })
    )
}

function removerElementosSeIniciarComNumero() {
    return createPipeableOperator(subsbcriber => ({
            next(texto) {
                const num = parseInt(texto.trim());
                if (num !== num) {
                    subsbcriber.next(texto)
                }
            }
        })
    )
}

function separarTextoPor(simbolo) {
    return createPipeableOperator(subsbcriber => ({
            next(texto) {
                texto.split(simbolo).forEach(parte => {
                    subsbcriber.next(parte)
                })
            }
        })
    )
}

function removerSimbolos(simbolos) {
    return createPipeableOperator(subsbcriber => ({
            next(texto) {
                const textoSemSimbolos = simbolos.reduce((acc, simbolo) => {
                    return acc.split(simbolo).join('')
                }, texto)
                subsbcriber.next(textoSemSimbolos)
            }
        })
    )
}

function agruparElementos() {
    return createPipeableOperator(subsbcriber => ({
            next(palavras) {
                const agrupado = Object.values(palavras.reduce((acc, palavra) => {
                    const el = palavra.toLowerCase()
                    const qtde = acc[el] ? acc[el].qtde + 1 : 1
                    acc[el] = { elmento: el, qtde }
                    return acc
                }, {}))
                subsbcriber.next(agrupado)
            }
        })
    )
}
function createPipeableOperator(operatorFn) {
    return function(source) {
        return new Observable(subscriber => {
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete())
            })
        })
    }
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    elementosTerminadosCom,
    removerElementosSeVazio,
    removerElementosSeIniciarComNumero,
    removerSimbolos,
    separarTextoPor,
    agruparElementos,
}
