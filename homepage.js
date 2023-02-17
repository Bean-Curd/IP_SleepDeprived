/*5 questions a day limit*/
// const APIKEY = "63e531fa478852088da67f67";
const APIKEY = "63ee3468478852088da68361"; //The demo one
// const APIKEY = "63eed80f478852088da6838f"; //The demo two

var username = localStorage.getItem("username");

var usernum;
document.getElementById("MYbtn1").onclick = () => {
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
            // url: `https://ipaccountinfos-e395.restdb.io/rest/accounts/${response[i]._id}`,
            url: `https://tempip-8a29.restdb.io/rest/accounts/${response[i]._id}`, //The demo one
            // url: `https://temp2ip-d88b.restdb.io/rest/accounts/${response[i]._id}`, //The demo two
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
            console.log("First Try Today");
            window.location.href =
              "http://127.0.0.1:5500/character_trivia.html";
          });
        } else if (response[i].numtrydone >= 5) {
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
            document.getElementById("MYanimation").innerHTML =
              '<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_gbfwtkzw.json" background="#3E3C46" speed="1.5" style="position: fixed; z-index: 5; width: 100vw; height: 100vh; overflow: hidden" loop autoplay></lottie-player>';
            setTimeout(myURL, 5000);
            function myURL() {
              window.location.href =
                "http://127.0.0.1:5500/character_trivia.html";
            }

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
              // url: `https://ipaccountinfos-e395.restdb.io/rest/accounts/${response[i]._id}`,
              url: `https://tempip-8a29.restdb.io/rest/accounts/${response[i]._id}`, //The demo one
              // url: `https://temp2ip-d88b.restdb.io/rest/accounts/${response[i]._id}`, //The demo two
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
              console.log("New Day Reset");
            });
          }
        } else if (0 < response[i].numtrydone <= 4) {
          /*If user has not used all their tries, let them in*/
          console.log("Continue Tries");
          document.getElementById("MYanimation").innerHTML =
            '<lottie-player src="https://assets8.lottiefiles.com/packages/lf20_gbfwtkzw.json" background="#3E3C46" speed="1.5" style="position: fixed; z-index: 5; width: 100vw; height: 100vh; overflow: hidden" loop autoplay></lottie-player>';
          setTimeout(myURL, 3000);
          function myURL() {
            window.location.href =
              "http://127.0.0.1:5500/character_trivia.html";
          }
        }
      }
    }
  });
};
