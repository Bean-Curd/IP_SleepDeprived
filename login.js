const APIKEY = "63e531fa478852088da67f67";
const clicklogin = (event) => {
  /*The message below the login form*/
  event.preventDefault(); /*Prevent page from refreshing after text is entered*/

  var username = $("#username").val();
  var password = $("#pwd").val();

  let getaccount = {
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
      window.location.href = "http://127.0.0.1:5500/homepage.html";
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
