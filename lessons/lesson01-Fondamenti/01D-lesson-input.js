Terminal = require("../../library/Console");

//Input
let name;
let surname;
let dob;

//Output
let age;
let presentation;

//Non ha senso che gli INPUT vengano scritti a mano dal programmatore
// dovranno essere forniti dall'utente tramite tastiera
name    =   Terminal.readString() ; 
//Ora il programma sta aspettando che l'utente scriva una riga sul terminale
//nel momento in cui premerà invio la riga verrà salvata all'interno della variabile name
surname =   Terminal.readString();//come sopra
dob     =   Terminal.readInt();//come sopra, ma il valore verrà visto come un numero e non come un testo
//1995 come numero NON HA NULLA A CHE FARE con "1995" come testo

age = 2023-dob;

presentation = "Mi chiamo "+name+" "+surname+" e ho "+age+" anni";

Terminal.print(presentation);