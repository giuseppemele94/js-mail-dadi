/** Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email */


//creo una lista di email 
const guestList = [
    "mario_rossi@gmail.com",
    "anna_bianchi@gmail.com",
    "luca_verdi@gmail.com",
    "giulia_neri@gmail.com",
    "giulia_rossi@gmail.com"
];

//chiedo all'utente di inserire una mail 
const guestEmail = prompt("Inserisci la tua email :"); 
//variabile per salvare il risultato 
let found = false ; 


//ciclo tutta la lista per trovare una corrispondenza 
for(let i =0 ; i < guestList.length ; ++i) {

    //se trovo una corrispondenza cambio la variabile in true e stampo email trovata
    if(guestList[i] === guestEmail) {
        found = true ; 
        console.log("Email presente, puoi accedere !", guestEmail); 
    }
}

//alrimenti stampo email non trovata
 if(!found) {
        console.log("Email non presente, non puoi accedere"); 
    }