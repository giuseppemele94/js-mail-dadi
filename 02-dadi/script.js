/**Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


//genero un numero casuale con random , floor mi serve per arrotondare per difetto perchè
//random genera numeri decimali 
const numberMachine = Math.floor(Math.random() * 6 ) + 1 ;
console.log("Numero della macchina: ",numberMachine);

const userNumber = Math.floor(Math.random() * 6 ) + 1 ;
console.log("Numero dell'utente: " ,userNumber);

if(numberMachine > userNumber) {
    console.log("Ha vinto la macchina ");
}else if (userNumber> numberMachine) {
    console.log("Ha vinto l'utente");
}else {
    console.log("Non ha vinto nessuno , numeri uguali "); 
}