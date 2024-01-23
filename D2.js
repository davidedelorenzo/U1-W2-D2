/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE ESERCIZIO 1

/*
const first = 10
const second = 20

if (first > second) {
  console.log("Il numero più grande è il primo: ", first)
} else if (second > first) {
  console.log("Il numero più grande è il secondo: ", second)
}
*/



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE ESERCIZIO 2

/*
const first_number = 2
const five = 5


if (first_number !== five) {
  console.log("not equal")
} else {
  console.log("error")
}
*/



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE ESERCIZIO 3

/*
const first_number = 1

if (first_number % 5) {
  console.log("divisibile per 5")
} else {
  console.log("error")
}
*/



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE ESERCIZIO 4

/*
const first_number = 8
const second_number = 2

// SOLUZIONE 1 - ESERCIZIO 4
// VERIFICO SE IL VALORE DI UNA DELLE DUE VARIABILI SIA UGUALE AD 8


if (first_number == 8 || second_number == 8) {
  console.log(true)
} else {
  console.log(false)
}
*/


// SOLUZIONE 2 - ESERCIZIO 4
// VERIFICO SE L'ADDIZIONE O LA SOTTRAZIONE TRA DUE VARIABILI DIA COME RISULTATO IL NUMERO 8

/*
const first_number = 16
const second_number = 8

let addizione = first_number + second_number

let sottrazione = first_number - second_number

if (addizione === 8) {
  console.log("L'addizione ha dato come risultato il numero 8.")
} else {
  console.log("L'addizione non ha dato come risultato il numero 8.")
}

if (sottrazione === 8) {
  console.log("La sottrazione ha dato come risultato il numero 8.")
} else {
  console.log("La sottrazione non ha dato come risultato il numero 8.")
}
*/



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE ESERCIZIO 5

/*
let totalShoppingCart = 50
let spedizione = ""

if (totalShoppingCart > 50) {
  spedizione = "Spedizione gratuita inclusa."
  console.log(spedizione)
} else if (totalShoppingCart <= 50) {
  spedizione = totalShoppingCart + 10
  console.log(`Si aggiungono 10€ di spedizione fissi per qualsiasi prodotto sotto 50€ o uguale. Totale: ${spedizione}€.`)
}
*/



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE ESERCIZIO 7

/*
const number_1 = 10 
const number_2 = 15
const number_3 = 20
let result = ""


if (number_3 > number_1 && number_3 > number_2) {
  result = `${number_1}, ${number_2}, ${number_3}.`
  console.log(result)
} else {
  console.log("error")
}
*/



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE ESERCIZIO 8

/*
const random = "10"
console.log(typeof random)
*/



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE ESERCIZIO 9 

/*
const number = 10

if (number % 2 === 0) {
  console.log(`${number} è un numero pari.`)
} else {
  console.log("error")
}
*/



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE ESERCIZIO 10

/*
  let val = 2
  if (val < 10 && val < 5) {
      console.log("Meno di 10, meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE ESERCIZIO 11

/*
me.city = "Toronto"
console.log(me)
*/



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// SOLUZIONE ESERCIZIO 12 

/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

delete me.lastName 
console.log(me)
*/



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
