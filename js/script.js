// Descrizione:
// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//Faccio un alert con 5 numeri casuali
const arrayrandom = generatearray (5 , 1, 100);
alert('I numeri random da memorizzare sono:' + ' ' + arrayrandom);
const usermessage = document.getElementById('user-message');
const random = arrayrandom;
//Dopo 30 secondi devo fare un promt che per cinque volte mi chiede 30 numeri e li salvo in un array
const userArray = [];
const sameNumber = [];
setTimeout(function(){
    for(let i = 0; i < 5; i++){
        const userNumber = parseInt(prompt('Inserisci un numero:')); 
        userArray.push(userNumber);
        console.log(userArray);
        if(random.includes(userNumber)){
            
            sameNumber.push(userNumber);
            console.log(sameNumber);
        
        }
        
    }
    usermessage.innerHTML = 'Hai azzeccato ' + sameNumber.length + ' numeri. I numeri azzeccati sono: ' + sameNumber ;
}, 30000)

//Devo controllare se i numeri sono gli stessi dell'array random: 
// Se sono uguali li pusho in un array e alla fine stampo i numeri e la quantità di numeri trovati

//Funzione per generare i numeri random
function generatearray(numberElements,rangeMin,rangeMax){
    const randomarray = [];

    while(randomarray.length < numberElements){
        const random = getRndInteger(rangeMin,rangeMax)
        if(!randomarray.includes(random) ){
            randomarray.push(random);
        }
    }
    return randomarray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}