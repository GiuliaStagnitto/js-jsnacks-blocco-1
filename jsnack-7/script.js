// esercizio 1

// var maggiore;
// var uguali= "i due numeri sono uguali";
//
// var numeroUno = parseInt(prompt ("Scegli un numero"));
//
// var numeroDue = parseInt(prompt ("Scegli un altro numero"));
//
// if (numeroUno > numeroDue) {
//  maggiore= numeroUno;
// } else if (numeroUno < numeroDue) {
//  maggiore = numeroDue;
// } else {
//   maggiore = uguali;
// }
//
// document.getElementById("ciao").innerHTML = maggiore;


// esercizio 2


// document.getElementById("inviaNome").addEventListener ("click", function (){
//   var nome = document.getElementById('nome').value;
//   var cognome = document.getElementById('cognome').value;
//   console.log(nome + " " + cognome);
//
// });


// esercizio 3
//
// document.getElementById('inviaNumero').addEventListener ("click", function(){
//   var numero = parseInt ( prompt ("Scegli un numero"));
//   var sfondo = document.getElementById('quadrato');
//
//   if (numero > 0) {
//     sfondo.className = "verde";
//   } else if (numero < 0) {
//     sfondo.className = "rosso";
//   } else{
//     sfondo.className = "blu";
//   }
// });


// esercizio 4
//
// document.getElementById('inviaNumero').addEventListener("click", function(){
//
//   var num = Math.floor((Math.random()*10)+1);
//   var numero = document.getElementById('numero');
//
//   numero.classList.add("pari","dispari");
//
//   if (num % 2 === 0) {
//     numero.classList.remove("pari");
//   } else {
//     numero.classList.remove("dispari");
//   }
//
//   console.log(numero);
//   console.log(num);
// });


// esercizio 5
//
document.getElementById('risolvi').addEventListener("click", function() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var operazioni = document.getElementById('operazioni').value;
  var risultato = document.getElementById('result');

  if (operazioni == "piu" ) {
    risultato = num1 + num2;
  } else if (operazioni == "meno" ){
    risultato = num1 - num2;
  } else if (operazioni == "per" ){
    risultato = num1 * num2;
  } else if (operazioni == "diviso" ){
    risultato = num1 / num2;
  }

  console.log(num1);
  console.log(num2);
  console.log(operazioni);
  console.log(risultato);

 document.getElementById('result').innerHTML = risultato;
});
