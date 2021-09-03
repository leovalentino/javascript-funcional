
let r
const I = a => a
r = I(3)
r

r = I(I)
r

const PRIM = a => _ => a

r = PRIM(7)(11)
r

const ULT = _ => b => b
r = ULT(7)(11)

r

const TROC = f => a => b => f(b)(a)

r= TROC(ULT)(7)(11)
r

r = TROC(PRIM)(6)(12)
r

const ULT2 = a => b => TROC(PRIM)(a)(b)

r = ULT2(13)(20)
r

const T = PRIM
const F = ULT

T.inspect = () => 'Vedadeiro (PRI)'
F.inspect = () => 'Falso (ULT)'

T
F

//NOT
const NOT = a => a(F)(T)
r = NOT(F)
r

//AND
const AND = a => b => a(b)(F)

r = AND(T)(F)
r

//OR
const OR = a => b => a(T)(b)
r = OR(F)(T)
r

const EQ = a => b => a(b)(NOT(b))

r = EQ(T)(T)
r

r = EQ(F)(F)
r

const XOR = a => b => NOT(EQ(a)(b))

r = XOR(F)(T)
r
