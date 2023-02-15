const fs = require("fs"); /*To read the Character_Array file*/
var path = "./Trivia/Character_Array.txt";

var list;
try {
  /*Read the file*/
  list = fs.readFileSync(path, "UTF8");
} catch {
  /*Shows the text if it cannot read the file*/
  console.log("AAAAAAAAAAAAA");
}
var chara = list.split("#"); /*Split the Character Array*/

var vqns = chara[0].split("/"); /*Split by Questions*/
var zqns = chara[1].split("/");
var rqns = chara[2].split("/");
var nqns = chara[3].split("/");

const chara_array = [vqns, zqns, rqns, nqns]; /*Array for different characters*/
var charanum = Math.floor(Math.random() * 4); /*Random character*/

var qnnum = Math.floor(Math.random() * 20); /*Random question number*/
var qn;

for (var i = 0; i < chara_array[charanum].length; i++) {
  /*Calls the randomized question*/

  if (i == qnnum) {
    qn =
      chara_array[charanum][i].split(
        "("
      ); /*Splits the question into its questions and answers */
  }
}
console.log(charanum);
console.log(qnnum);
console.log(qn);
