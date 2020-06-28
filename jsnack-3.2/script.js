var numeri;
var somma = parseInt(0);

//
// for (var i = 0; i < 5; i++) {
//  numeri = parseInt(prompt("Inserisci un numero"));
//  somma += numeri;
// }
// console.log(somma);

var i=0;

while (i<5) {
  numeri = parseInt(prompt("Inserisci un numero"));
  somma += numeri;
  i++;
}
console.log(somma);
