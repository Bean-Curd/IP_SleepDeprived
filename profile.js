document.getElementById("MYsignoutbtn").onclick = () => {
  window.location.href = "http://127.0.0.1:5500/index.html";
};

var username = localStorage.getItem("username");
var userprimo = username;

userprimo += "primo";
// localStorage.setItem(userprimo, 450); /*For Testing*/

if (localStorage.getItem(userprimo) == null) {
  /*If theuser has no primogems, create one with 0*/
  localStorage.setItem(userprimo, 0);
}

document.getElementById("MYshowprimo").innerHTML =
  localStorage.getItem(userprimo);
const clickconvert = (event) => {
  var primonum = parseInt(localStorage.getItem(userprimo));
  var preprimonum;

  if (primonum >= 100) {
    preprimonum = primonum;
    primonum = preprimonum - 100;
    window.location.reload(true);
    localStorage.setItem(
      userprimo,
      primonum
    ); /*To call Primogem Number in script.js*/
    alert("A 100 Primogems have been converted to 50 in game Primogems!");
  } else {
    alert("You do not have enough Primogems!");
  }
};
