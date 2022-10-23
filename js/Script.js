// 1. Il programma chiede all'utente Nome e Cognome
const nomeCognome = document.getElementById("name");
console.log(typeof nomeCognome, nomeCognome);

// 2. Il programma chiede all'utente quanti chilometri deve percorrere
const km = Number(document.getElementById("number"));
console.log(typeof km, km);

// 3. Il programma chiede l'età dell'utente
const age = Number(document.getElementById("age"));
console.log(typeof age, age);

// 4. Calcolo del prezzo del bilgietto

const btnGenerate = document.getElementById("btn-generate")
btnGenerate.addEventListener(`click`, function() {

    let price = km * 0.21;
    console.log( typeof price, price)
    
    //   4a. Applico sconto del 20% SE l'utente è minorenne, oppure del 40% SE l'utente è over 65
    if (age < 18) {
        price -= price * 0.2
    } else if (age > 64) {
        price -= price * 0.4
    };

});

console.log(price.toFixed(2));