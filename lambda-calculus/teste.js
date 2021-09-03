Number.prototype.log = function () { console.log(+this) }
Function.prototype.log = function () { console.log(this.toString()) }

const I = a => a
I(3).log()

I(I).log()

const PRIM = a => _ => a

PRIM(7)(11).log()

const ULT = _ => b => b
ULT(7)(11).log()

const TROC = f => a => b => f(b)(a)

TROC(ULT)(7)(11).log()

TROC(PRIM)(6)(12).log()

const ULT2 = a => b => TROC(PRIM)(a)(b)

ULT2(13)(20).log()

const T = PRIM
const F = ULT

T.toString = () => 'Vedadeiro (PRI)'
F.toString = () => 'Falso (ULT)'

T.log()
F.log()

//NOT
const NOT = a => a(F)(T)
NOT(F).log()

//AND
const AND = a => b => a(b)(F)

AND(T)(F).log()

//OR
const OR = a => b => a(T)(b)
OR(F)(T).log()

const EQ = a => b => a(b)(NOT(b))

EQ(T)(T).log()

EQ(F)(F).log()

const XOR = a => b => NOT(EQ(a)(b))

XOR(F)(T).log()
