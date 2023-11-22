Terminal = require("../../library/Console");

//Le variabili sono delle scatole che possono contenere un valore
//Tale valore potrà essere usato dal resto del programma
//Prevedono 3 operazioni fondamentali

//Dichiarazione, faccio sapere alla macchina che sto creando una nuova variabile
let fullName;
//In questo momento la variabile fullName ESISTE, ma è una scatola VUOTA
/*
                  ---------------------
                  |                   |
    fullName ->   |                   |
                  |                   |
                  ---------------------
*/


//Assegnamento, inserire un valore all'interno della variabile
//Ogni volta che vedete il simbolo "=" scritto una sola volta, si tratta di assegnamento
fullName =  "Stefano Rubinetti";
/*
                  ---------------------
                  |                   |
    fullName ->   |"Stefano Rubinetti"|
                  |                   |
                  ---------------------
*/

//Lettura, prendere il valore CONTENUTO all'interno della variabile
//Leggiamo una variabile ogni volta in cui NON facciamo un ASSEGNAMENTO
//Ad esempio nella riga sotto sto leggendo e STAMPANDO il valore della variabile fullName
Terminal.print(fullName);


//Posso avere quante variabili voglio
let ageDescription; //Dichiarazione

ageDescription = "Ho 28 anni";//Assegnamento

Terminal.print(ageDescription);//Lettura

//Non posso leggere una variabile prima di averla Dichiarata e Inizializzata.
//Provate a eseguire il programma spostando la riga 41 alla riga 35, andrà in CRASH