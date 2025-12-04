/*JSnack 2
L’utente inserisce due parole in successione, con due prompt. 
Il software stampa prima la parola più corta, poi la parola più lunga;
*/


const wordOne = prompt("Inserisci la prima parola");
const wordTwo= prompt("Inserisci la seconda parola");
console.log("Parole inserite :" ,wordOne,wordTwo);  

if(wordOne.length< wordTwo.length) {
    console.log(wordOne,wordTwo);

} else if (wordTwo.length < wordOne.length) {
    console.log(wordTwo,wordOne); 
}

else {
    console.log("Le parole hanno la stessa lunghezza" , wordOne,wordTwo); 
}




/*
JSnack 5
Crea un array vuoto. 
Chiedi per 6 volte all’utente di inserire un numero, 
se è dispari inseriscilo nell’array
*/

let messaggio = document.getElementById('console-log'); 
const array = []; 

for(let i = 0; i < 6 ; ++i)  {
    const numero = parseInt(prompt("Inserisci un numero"));
    if(numero %2 == 1) {
        array.push(numero); 
    }
}

console.log("Numeri salvati nell'array :", array);

messaggio.innerHTML += `<li> Numeri salvati nell'array : ${array}</li>`; 