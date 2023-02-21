const APIKEY = "63e531fa478852088da67f67";
// const APIKEY = "63ee3468478852088da68361"; //The demo one
// const APIKEY = "63eed80f478852088da6838f"; //The demo two

var username = localStorage.getItem("username");

var usernum;
let gettime = {
  async: true,
  crossDomain: true,
  url: "https://ipaccountinfos-e395.restdb.io/rest/accounts",
  // url: "https://tempip-8a29.restdb.io/rest/accounts", //The demo one
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
      if (response[i].numtrydone >= 5) {
        document.getElementById("MYaskhelpok").onclick = () => {
          alert("You have completed all your tries for today!");
          window.location.href = "http://127.0.0.1:5500/homepage.html";
        };
      } else if (4 > response[i].numtrydone >= 0) {
        document.getElementById("MYaskhelpok").onclick = () => {
          window.location.href = "http://127.0.0.1:5500/character_trivia.html";
        };
      }
    }
  }
});
