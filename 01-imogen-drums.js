// 01. Bateria/percussão - Recriando Imogen: A New Kind of Love 

setcpm(130/4)

$drum: stack(
    // hihats com abertura no último compasso
    s("<[hh:4*8]!7 [hh:4!7 oh]>")
        .decay("<0.12!7 [0.12!7 1.5]>").cut(1)
        .velocity(rand.range(0.6, 0.8)),
    s("bd:6").beat("0, 1, 5", 8),
    // snare com ghost notes no velocity
    n("~ ~ 5 [~ 5] ~ ~ 5 ~").s("sd").decay(0.15)
        .velocity("~ ~ 1 [~ 0.2|0.1|0.3] ~ ~ 1 ~"),
).postgain(0.3)
