// const APIKEY = "63e531fa478852088da67f67";
const APIKEY = "63ee3468478852088da68361"; //The demo one
// const APIKEY = "63eed80f478852088da6838f"; //The demo two

var username = localStorage.getItem("username");
var userprimo = username;

userprimo += "primo";

if (localStorage.getItem(userprimo) == null) {
  /*If theuser has no primogems, create one with 0*/
  localStorage.setItem(userprimo, 0);
}

var usernum;
let gettime = {
  async: true,
  crossDomain: true,
  // url: "https://ipaccountinfos-e395.restdb.io/rest/accounts",
  url: "https://tempip-8a29.restdb.io/rest/accounts", //The demo one
  // url: "https://temp2ip-d88b.restdb.io/rest/accounts", //The demo two
  method: "GET",
  headers: {
    "content-type": "application/json",
    "x-apikey": APIKEY,
    "cache-control": "no-cache",
  },
};

$.ajax(gettime).done(function (response) {
  for (var i = 0; i < response.length; i++) {
    /*Looks for the user's account*/
    if (response[i].email == username) {
      usernum = i; /*Gets the user's account position*/
      if (response[i].numwrong == 0) {
        /*If all correct*/
        var correct = 5;
        var primonum = parseInt(localStorage.getItem(userprimo));
        primonum += 20;
        localStorage.setItem(userprimo, primonum);

        document.getElementById("Charawin").innerHTML =
          /*Put Img*/
          '<img src="./Artworks/Chests/Luxurious Chest.png" id="MYwin" alt="oop" />';
        setTimeout(myalert, 1000);
        function myalert() {
          alert("You get 20 Primogems!");
        }
      } else if (response[i].numwrong == 1) {
        /*If 4 correct*/
        var correct = 4;
        var primonum = parseInt(localStorage.getItem(userprimo));
        primonum += 10;
        localStorage.setItem(userprimo, primonum);
        document.getElementById("Charawin").innerHTML =
          /*Put Img*/
          '<img src="./Artworks/Chests/Precious Chest.png" id="MYwin" alt="oop" />';
        setTimeout(myalert, 1000);
        function myalert() {
          alert("You get 10 Primogems!");
        }
      } else if (response[i].numwrong == 2) {
        /*If 3 correct*/
        var correct = 3;
        var primonum = parseInt(localStorage.getItem(userprimo));
        primonum += 5;
        localStorage.setItem(userprimo, primonum);
        document.getElementById("Charawin").innerHTML =
          /*Put Img*/
          '<img src="./Artworks/Chests/Exquisite Chest.png" id="MYwin" alt="oop" />';
        setTimeout(myalert, 1000);
        function myalert() {
          alert("You get 5 Primogems!");
        }
      } else if (response[i].numwrong == 3) {
        /*If 2 correct*/
        var correct = 2;
        var primonum = parseInt(localStorage.getItem(userprimo));
        primonum += 2;
        localStorage.setItem(userprimo, primonum);
        document.getElementById("Charawin").innerHTML =
          /*Put Img*/
          '<img src="./Artworks/Chests/Common Chest.png" id="MYwin" alt="oop" />';
        setTimeout(myalert, 1000);
        function myalert() {
          alert("You get 2 Primogems!");
        }
      }
    }
  }
});

document.getElementById("MYreturn").onclick = () => {
  window.location.href = "http://127.0.0.1:5500/homepage.html";
};
