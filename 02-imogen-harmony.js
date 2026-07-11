// 02. Harmonia e melodia - Recriando Imogen: A New Kind of Love 

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

$bass:
  // D (C#) E  F# (E) A
  n("<[[-2 ~]!2 [~ -3] -2] [[-1 ~]!2 [~ -1] ~] [[-7 ~]!2 [~ -8] -7] [[-5 ~]!2 [~ -5] ~]>")
    .scale("F#:minor")
    .s("gm_synth_bass_2:1")
    .transpose("-12")
    .lpf(162)
    .lpq(4)
    .lpenv(2)
    .adsr(".02:.2:.6:.24")
    .gain(0.75).clip(2)

$sub:
  // D (C#) E  F# (E) A
  n("<[[-2 ~]!2 [~ -3] -2] [[-1 ~]!2 [~ -1] ~] [[-7 ~]!2 [~ -8] -7] [[-5 ~]!2 [~ -5] ~]>")
    .scale("F#:minor")
    .s("triangle")
    .transpose("-24")
    .adsr(".01:.15:.74:.3")
    .gain(0.6).clip(1.5)

$pad:
  note("<[c#4, f#4, a4, C#5] ~ [a3, c#4, e4, G#4] ~ >")
  .s("gm_string_ensemble_1:1")
  .adsr(".45:.9:.75:1.2")
  .lpf(850)
  .lpq(2)
  .lpenv(0)
  .room(0.8)
  .gain(0.067)