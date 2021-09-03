// esperar 3s
// gerar números de 500
// depois de 10s unsubscribe

const{ timer, Subscription } = require('rxjs')

const obs = timer(3000, 500)

const sub1 = obs.subscribe(numero => {
    console.log(`1# Gerou o número ${numero}`)
})

const sub2 = obs.subscribe(numero => {
    console.log(`2# Gerou o número ${numero}`)
})

const sub = new Subscription();

sub.add(sub1)
sub.add(sub2)

setTimeout(() => {
    sub.unsubscribe()
}, 10000)


