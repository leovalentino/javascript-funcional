const path = require('path')
const fn = require('./funcoes')
const _ = require('lodash')
const {toArray, map} = require("rxjs");

const caminho = path.join(__dirname, '../..', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')', '\\', '!'
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeIniciarComNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio(),
        toArray(),
        fn.agruparElementos(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)
