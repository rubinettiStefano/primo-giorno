let readline = require("readline-sync");



function readString()
{
     return readline.question("");
}

function  readInt()
{
     let res = parseInt(readline.question(""));

     if(isNaN(res))
          throw "Non hai inserito un numero, il programma è crashato";

     return res;
}
function readDouble()
{
     let res = parseFloat(readline.question(""));
     if(isNaN(res))
          throw "Non hai inserito un numero, il programma è crashato";
     
     return res;
}

function print(message)
{
     console.log(message);
}


module.exports = {readString:readString,readInt:readInt,readDouble:readDouble,print:print};
