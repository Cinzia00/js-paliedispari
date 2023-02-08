console.log('ciao')

//Chiedere all'utente di scegliera tra pari e dispari
let sceltaUtente = prompt('Scegli: pari o dispari?')

//Chiedere all'utente di inserire un numero da 1 a 5
let numeroUtente = prompt('Inserisci un numero da 1 a 5')

let resto = numeroUtente % 2
// let numeroPari = resto === 0
console.log(sceltaUtente)

if (resto === 0 && sceltaUtente === 'pari') {
    console.log('il numero è pari, Hai vinto')
} else {
    console.log('il numero è dispari, Non hai vinto')
}



//Generare un numero random per il pc, usando una funzione
let numeroRandomPc = numeroRandom()
console.log(numeroRandomPc)



//Sommare numeroUtente e numeroPC 

let sommaTotatle = numeroRandomPc + parseInt(numeroUtente)
console.log(sommaTotatle, 'somma totale')



//Stabilire se la somma è pari o dispari (usando una funzione)
let vincitore = somma(numeroRandomPc, numeroUtente)

console.log(vincitore, 'vincitore')



function somma(num1, num2) {
    let resto = num1 + num2 % 2
    return resto
}



//Comunicare all'utente il vincitore 







function numeroRandom() {
    let numeroPc = parseInt(Math.floor(Math.random() * 5));
    return  numeroPc   
}
