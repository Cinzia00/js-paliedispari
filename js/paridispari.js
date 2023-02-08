// console.log('ciao')

// //Chiedere all'utente di scegliera tra pari e dispari
// let sceltaUtente = prompt ('Scegli: pari o dispari?')


// //Chiedere all'utente di inserire un numero da 1 a 5
// let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'))


// //Generare un numero random per il pc, usando una funzione
// let numeroRandomPc = numeroRandom();
// console.log(numeroRandomPc);



// //Sommare numeroUtente e numeroPC 
// let sommaTotale = somma(numeroRandomPc, numeroUtente);
// console.log(sommaTotale, 'somma totale');


// //Stabilire se la somma è pari o dispari (usando una funzione)
// let isOdd =  numeroPari(sommaTotale)



// //Comunicare all'utente il vincitore 
// if (sceltaUtente === 'pari' && isOdd) {
//     console.log('il numero è pari, Hai vinto')
// } else if (sceltaUtente === 'dispari' && !isOdd){
//     console.log('il numero è dispari, Non hai vinto')
// }else {
//     console.log('Hai perso')
// }




// //******FUNZIONI********/

// function numeroPari(numero) {
//     let resto0 = parseInt(numero % 2)
//     if (resto0 === 0){
//         return true
//     } else {
//         return false
//     }
// }

// function somma(num1, num2) {
//     let somma = parseInt(num1 + num2)
//     console.log({somma})
//     return somma
// }

// function numeroRandom() {
//     let numeroPc = parseInt(Math.floor(Math.random() * 5));
//     return  numeroPc   
// }
// //***********************/





// console.log('Palidroma')
// //Chiedere una parola all'utente 
//  let parolaUtente = prompt('inserisci una parola');
//  console.log(parolaUtente);

//  //Con una funzione, controllare se la parola e palidroma
// let parolaConvertita = invertiParola()
// console.log(parolaConvertita)

//  function invertiParola() {
//     let parola = nome.split('')
//     return parola
//  }
//  //Comunicare all'utente se la parola inserita è palidroma o no
