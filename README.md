# Recap 23/05/23

- Si parte dalla struttura base (branch "initial"), senza componenti innestati dentro App.vue

- Si introducono i componenti Header e Main. A questo punto le informazioni da ```data()``` in App.vue devono fluire verso i componenti figli, che usano queste informazioni nel loro ```<template>```. Abbiamo tre possibilità:

    - Usiamo le props per passare queste informazioni verso il basso, e gli eventi per passarle verso l'alto (branch final-with-props).

    - Spostiamo le informazioni dal ```data()``` di App.vue in uno stato globale visibile a (e modificabile da) tutti i componenti figli (branch final-with-global-state).

    - Un mescolone dei due punti precedenti.