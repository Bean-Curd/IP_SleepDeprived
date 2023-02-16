/*5 questions a day limit*/
const APIKEY = "63e531fa478852088da67f67";
var username = localStorage.getItem("username");

var usernum;
document.getElementById("MYbtn1").onclick = () => {
  let gettime = {
    async: true,
    crossDomain: true,
    url: "https://ipaccountinfos-e395.restdb.io/rest/accounts",
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
        if (response[i].numtrydone == 0) {
          /*If the user has not done the Character Trivia today, set the rest of the dates to this date*/
          var try1 = new Date();

          var jsondata = {
            email: username,
            password: response[i].password,
            try1date: try1,
            try5date: try1,
            tryagain: try1,
          };
          var puttime = {
            async: true,
            crossDomain: true,
            url: `https://ipaccountinfos-e395.restdb.io/rest/accounts/${response[i]._id}`,
            method: "PUT",
            headers: {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache",
            },
            processData: false,
            data: JSON.stringify(jsondata),
          };

          $.ajax(puttime).done(function (response) {
            console.log(response);
          });

          window.location.href = "http://127.0.0.1:5500/character_trivia.html";
        } else if (0 < response[i].numtrydone < 5) {
          /*If user has not used all their tries, let them in*/
          window.location.href = "http://127.0.0.1:5500/character_trivia.html";
        } else if (response[i].numtrydone == 5) {
          /*If user has used all 5 tries*/
          var taptryagain =
            new Date(); /*Current time they want to try the quiz again*/
          if (
            taptryagain.toDateString() ==
            new Date(response[i].try5date).toDateString()
          ) {
            /*If they want to try the quiz at the same day as the day they completed the quiz, deny entry*/
            alert("You have already done 5 tries today!");
          } else if (
            taptryagain.toDateString() !=
            new Date(
              response[i].try5date
            ).toDateString() /*If it is the next day, reset variables and start again*/
          ) {
            var try1 = new Date();

            var jsondata = {
              email: username,
              password: response[i].password,
              try1date: try1,
              try5date: try1,
              tryagain: try1,
              numtrydone: 0,
            };
            var puttime = {
              async: true,
              crossDomain: true,
              url: `https://ipaccountinfos-e395.restdb.io/rest/accounts/${response[i]._id}`,
              method: "PUT",
              headers: {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache",
              },
              processData: false,
              data: JSON.stringify(jsondata),
            };

            $.ajax(puttime).done(function (response) {
              console.log(response);
            });

            window.location.href =
              "http://127.0.0.1:5500/character_trivia.html";
          }
        }
      }
    }
  });
};
