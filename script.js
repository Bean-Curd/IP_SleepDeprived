
const clicklogin = (event) => { /*The message below the login form*/
    event.preventDefault(); /*Prevent page from refreshing after text is entered*/

    var username = $("#username").val();
    var password = $("#pwd").val();

    if (username == "Test1@gmail.com" && password == "Test1") {
      /*If the information is correct*/
        window.location.href = "http://127.0.0.1:5500/homepage.html";
    } else {
      $("#msg") /*If the information is wrong*/
        .html(`<div class="container p-3 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3">
                      **Invalid email or password, please try again.
                      </div>`);
    }
  };

  /*STORE: QN LIMITS, */

  $(document).ready(function() { /*For RestDB*/
    const APIKEY = "663e531fa478852088da67f67";
    getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();

      let email = $("#account-email").val();
      let password = $("#account-password").val();

      let jsondata = {
        "Email": email,
        "Password": password,
      };

});