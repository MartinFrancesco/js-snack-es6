// /* JSnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars. */
const bikes = [
  {
    nome: 'Bianchi',
    peso: '8',
  }
  {
    nome: 'Sempion',
    peso: '10',
  }
  {
    nome: 'Ravasi',
    peso: '9',
  }
];

bikes.forEach( (element) => {
  return {
    ...element,
    position: ,
  }
}));

bikes.forEach( (element) => {
 if (min <= index && max >= index ) {
   newArray.push(element);
 }
})


/* JSnack 2
Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente. */

// const nomi = [ 'Carlo', 'Simone', 'Pietro', 'Luca', 'Chiara', 'Fabio'];
// const newArray = [];
//
// let tot = nomi.length - 1;
// let min = parseInt( prompt( 'Inserisci un numero indice di inizio tra 0 e ' + tot).trim());
// let max = parseInt( prompt( 'Inserisci un numero indice di inizio tra 0 e ' + tot).trim());
//
// //Filter?
// newArray = nomi.filter( (element, index) => {
//
//     return  min <= index && max >= index;
// }
//
// nomi.forEach( (element, index) => {
//   if (min <= index && max >= index ) {
//     newArray.push(element);
//   }
// })
//
// console.log(newArray);


/* JSnack 3
Creiamo un array di oggetti (scelti da voi)
Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
Non dobbiamo modificare l'array iniziale. */

const teams = [
  {
    name: 'Ferrari',
    color: 'Red',
  },
  {
    name: 'Mercedes',
    color: 'Black',
  },
  {
    name: 'Mclaren',
    color: 'Orange',
  }
];

const copy = [...teams].map( (element => {

  // const copyEl = {
  //   ...element,
  //   position.generaPosizione(),
  // }
  //
  // return copyEl

  return {
    ...element,
    position: generaPosizione(),
  }
}));

console.log(copy);


function generaPosizione() {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';

  var letter = letters[randomNumber(0, letters.length - 1)];

  return letter;
}

function randomNumber(min, max) {
  return Math.floor( Math.random() * (max - min + 1)) + min;
}
