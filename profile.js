var username = localStorage.getItem("username");
var userprimo = username;

userprimo += "primo";

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
    alert("A 100 Primogems have been converted to 50 Primogems!");
  } else {
    alert("You do not have enough Primogems!");
  }
};
