Terminal = require("../../library/Console");

//D-Dichiarazione
//--variabili di input
let name;
let carbs;
let fats;
let proteins;
//--variabili calcolate
let carbsCalories;
let fatsCalories;
let proteinsCalories;
let totalCalories;
//--variabili di output
let presentation;
//I-Input
Terminal.print("Inserisci nome del cibo");
name       = Terminal.readString();
Terminal.print("Inserisci grammi di carboidrati");
carbs      = Terminal.readInt(); 
Terminal.print("Inserisci grammi di grassi");
fats       = Terminal.readInt(); 
Terminal.print("Inserisci grammi di proteine");
proteins   = Terminal.readInt(); 
//C-Calcolo
carbsCalories    = carbs    * 4;
fatsCalories     = fats     * 8;
proteinsCalories = proteins * 4;
totalCalories    = carbsCalories+fatsCalories+proteinsCalories;

presentation = "Il cibo di nome: "+name+" ha un totale di "+totalCalories+" calorie";
//O-Output
Terminal.print(presentation);