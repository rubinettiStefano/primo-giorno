Terminal = require("../../library/Console");

//Scrivere un programma che produca un annuncio immobiliare, esempio:

    // "Vendesi Monolocale Via Montenapoleone di mq 60: Living 40mq (5x8), 
    // Bagno 10mq(5x2), Balcone 10mq (5x2), pmq: 1000 euro, richiesta: 60.000 euro. Contattare 333.666.666.7 "

//variabili:
// address e message (che conterranno testo/Stringa), livingRoomSide1 e livingRoomSide2, bedroomSide1 e bedroomSide2, 
// bathroomSide1 e bathroomSide2, livingRoomArea, bathroomArea, bedroomArea, totalArea 
// smp, priceHouse che saranno numeri interi

//PROCEDIMENTO

//D
//Dichiarare le variabili (quelle di input, quelle che verranno calcolate e message che è la variabile di output)

//I
// Rifacendosi a quanto visto precedentemente, chiedere all’utente i valori delle seguenti variabili:
// address
// livingRoomSide1 e livingRoomSide2
// bedroomSide1 e bedroomSide2
// bathroomSide1 e bathroomSide2
// smp
// N.B: attenzione all’uso di Terminal.readString() e Terminal.readInt(), in base al tipo di input

//C
// Calcolare i valori delle seguenti variabili tramite espressioni
// livingRoomArea
// bathroomArea
// bedroomArea
// totalArea
// priceHouse
// Calcolare il messaggio usando le varibili calcolate, come visto precedentemente
// e assegnarlo alla variabile messagge

//O
// Ordinare alla macchina di stampare il valore della variabile message usando Terminal.print().
