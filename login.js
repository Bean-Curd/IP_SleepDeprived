const APIKEY = "63e531fa478852088da67f67";
// const APIKEY = "63ee3468478852088da68361"; //The demo one
// const APIKEY = "63eed80f478852088da6838f"; //The demo two
const clicklogin = (event) => {
  /*The message below the login form*/
  event.preventDefault(); /*Prevent page from refreshing after text is entered*/

  var username = $("#username").val();
  var password = $("#pwd").val();

  let getaccount = {
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

  $.ajax(getaccount).done(function (response) {
    var check = false;
    for (var i = 0; i < response.length; i++) {
      if (response[i].email == username && response[i].password == password) {
        /*If the information is correct*/
        check = true;
        break;
      }
    }
    if (check) {
      /*Plays the Lottie Animation*/
      $("#MYanimation").html(`<lottie-player
        src="https://assets8.lottiefiles.com/packages/lf20_gbfwtkzw.json"
        background="transparent"
        speed="1.5"
        style="width: 100vw; height: 100vh"
        loop
        autoplay
      ></lottie-player>
    </div>`);
      setTimeout(myURL, 3000);
      function myURL() {
        window.location.href = "http://127.0.0.1:5500/homepage.html";
      }
    } else {
      $("#msg") /*If the information is wrong*/
        .html(`<div class="container p-3 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">
                          **Invalid email or password, please try again.
                          </div>`);
    }
  });

  localStorage.setItem(
    "username",
    username
  ); /*To call username in script.js so the Question local storage is user specific*/
};

//localStorage.clear(); /*To clear the questions for testing*/
