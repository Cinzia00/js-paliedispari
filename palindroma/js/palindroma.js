console.log('Palidroma')
//Chiedere una parola all'utente 
 let parolaUtente = prompt('inserisci una parola');
 console.log(parolaUtente);

 //Con una funzione, controllare se la parola e palidroma
 let parola = parolaUtente.split('')
 console.log(parola)
 let parolaControllata = invertiParola(parola)

 console.log(parolaControllata)
 
 
 let stampa = palindroma(parolaControllata, parolaUtente)

console.log(stampa)

//Comunicare all'utente se la parola inserita è palidroma o no
document.getElementById('palindroma').innerHTML += stampa




function invertiParola(parola){
    let parolaInvertita = ''
    for (let i = 0; parola.length > 0; i++){
       parolaInvertita += parola.pop()
    }
    return parolaInvertita
}


function palindroma(parola1, parola2){
    
    console.log(parola1, parola2)
    if(parola1 === parola2){
        return 'La parola è palindroma'
    } else {
        return 'la parola non è palindroma'
    }
}
