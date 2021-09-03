const { Observable } = require('rxjs')

const obs = Observable.create(subscribe => {
    subscribe.next('RxJS')
    subscribe.next('é')
    subscribe.next('bem')
    subscribe.next('poderoso')

    if (Math.random() > 0.5) {
        subscribe.complete()
    } else {
        subscribe.error('Que problema!?!')
    }
})

obs.subscribe(
    valor => console.log(`Valor: ${valor}`),
    erro => console.log(`Erro: ${erro}`),
    () => console.log('Fim')
)

obs.subscribe({
    next(valor) {
        console.log(`Valor: ${valor}`)
    },
    complete() {
        console.log('Fim')
    },
    error(msg) {
        console.log(`Erro: ${msg}`)
    }
})
