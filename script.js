
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

/*30 Second Countdown for Questions*/
var seconds = 30; 
    var cd = document.getElementById("Countdown");
    
    var timer = setInterval(countdown, 1000);
    
    function countdown() {
      if (seconds == -1) {
        clearTimeout(timer);
        doSomething();
      } else {
        cd.innerHTML = seconds + " seconds";
        seconds--;
      }
    }

/*Character Questions List*/

var list = `
What is the Anemo Archon's name?(Barbatos(Barbara(Barbiton(Venti
  /What is Venti's signature dish?(A Buoyant Breeze(Barbatos Ratatouille(Prosperous Peace(All-Weather Beauty
  /When is Venti's birthday?(June 16th(July 1st(Decemeber 16th(April 1st
  /What is Venti's banner name?(Ballad in Goblets(Opera in Chalice(Ode to Wine(Invitation to Wine
  /What is Venti's constellation?(Carmen Dei(Antilla Ara(Acer Palmatum(Epsilon Aurigae 
  /What is the local specialty needed for Venti's ascension?(Cecilia(Windwheel Aster(Philanemo Mushroom(Calla Lily 
  /What is Venti's element?(Anemo(Hydro(Dendro(Voido
  /What weapon does Venti wield?(Bow(Catalyst(Claymore(Polearm
  /What is Venti allergic to?(Cats(Dogs(Rats(Birds
  /What is the Anemo Archon's vessel name?(Venti(Barbatos(Dvalin(Liben
  /What is Paimon's nickname for Venti?(Tone-Deaf Bard(Green Hat(Off-Key Drunk(Broke Wine-Sniffer
  /What is Venti's namecard called?(Azure Sky(Wind-Sung Sea(Eagleplume(Virtuoso
  /Venti is the God of ______?(Freedom(Wind(Wine(Music
  /What was Barbatos's original form?(Wind Spirit(Dandelion Seed(Dragon(Bard
  /Who was Barbatos's competitor for the position of Anemo Archon?(Andrius(Dvalin(Vanessa(Razor
  /How many versions does Venti's Elemental Skill have?(Two(One(It's not called Elemental Skill(Three
  /What is Venti's favourite food?(Apples(Wine(Sunsettia(Dandelions
  /What is Venti's current occupation?(Bard(Traveler(Poet(Priest
  /What is the name of the lyre that Venti wields?(Der Fruhling(Windsong Lyre(Holy Lyre de Himmel(Holy Lyram de Himbel
  /How many times did La Signora hit Venti?(3(2(5(8
  #
  What is the Geo Archon's name?(Morax(Zhongli(God of Contracts(Rex Lupos
  /What is Zhongli's signature dish?(Slow-Cooked Bamboo Shoot Soup(Simmered Bamboo Shoot Soup(Steamed Young Bamboo Shoot(Bamboo Bun
  /When is Zhongli's birthday?(December 31st(October 22nd(February 2nd(January 1st
  /What is Zhongli's banner name?(Gentry of Hermitage(Hermit's Gantry(Adrift in the Harbor(Groundbreaker
  /What is Zhongli's constellation?(Lapis Dei(Draco Scutum(Rex Andromeda(Opus Aequilibrium
  /What is the local specialty needed for Zhongli's ascension?(Cor Lapis(Noctilucous Jade(Qingxin(Cor Amber
  /What is Zhongli's element?(Geo(Electro(Pyro(Rocko
  /What weapon does Zhongli wield?(Polearm(Spear(Sword(Catalyst
  /What does Zhongli work as?(Funeral Consultant(Storyteller(Chef(Travel Guide
  /What is Zhongli's namecard called?(Planet Befall(Sandstorm(Stillness in Stone(Stone of Light
  /What food does Zhongli dislike the most?(Seafood(Shellfish(Soup(Tofu
  /What is the Geo Archon's vessel name?(Zhongli(Rex Lapis(John Lee(Azhdaha
  /Zhongli is the God of ______?(Contracts(Mora(Rock(War
  /What does Morax appear in during the annual Rite of Descension?(Dragon(Deer(Crane(Snake
  /What was Morax's Gnosis used for?(Minting of Mora(Creation of Contracts(Carving of Rock(Wrath of Rock
  /What was Zhongli's reason for stepping down as the Geo Archon?(To prevent erosion(To retire(To work among the people(To break the economy
  /Which of the following books are about Morax?(Rex Incognito(Set in Stone(Mountain Shaper(Stone Carver
  /What is the approximate length of Morax's Exuvia in Aether's height?(9(12(13(4
  /What is Morax's preference for perfume?(Fate's Yearning(Valley Weaver(Golden House Maiden(Sedimentary Silk
  /'Osmanthus wine tastes the same as I remember, but where are those who share the ________.'(Memory(Memoir(Memories(Melodies
  #
  Who is the Raiden Shogun?(Ei and the Shogun Puppet(Ei(A Puppet(Scaramouche
  /What is the Raiden Shogun's signature dish?(She cannot cook(Faith Eternal(Fukuushi Udon(Kitsune Ramen
  /When is Ei's birthday?(June 26th(September 15th(November 7th(March 20th
  /What is Ei's Geoetic name?(Beelzebul(Beelzelbub(Baal(Ei
  /What is the name of the Raiden Shogun's banner?(Reign of Serenity(Reign of Eternity(The Eternal One Returns(Eternal Royale
  /What is Ei's constellation?(Imperatrix Umbrosa(Zapdos Ursaluna(Tribulatio Demptio(Flabellum
  /What is the local specialty needed for the Raiden Shogun's ascension?(Amakumo Fruit(Naku Weed(Sakura Bloom(Crystal Marrow
  /What is the Raiden Shogun's element?(Electro(Zappo(Pyro(Anemo
  /What weapon does the Raiden Shogun wield?(Polearm(Sword(Claymore(Bow
  /What weapon does Ei wield?(Sword(Polearm(Claymore(Bow
  /Who is Ei's twin sister?(Raiden Makoto(Yae Miko(Kujou Sara(Balladeer
  /What is the Geotic name of Ei's sister?(Baal(Beelzelbul(Paimon(Behemoth
  /What does the Shogun dislike which is different from what Ei likes?(Sweets(Sour Foods(Seafood(Fruit
  /What is the Raiden Shogun's namecard called?(Enlightenment(Tempest Fugit(Lightning Siletto(Weighing Anchor
  /What is the pinnacle of Ei's swordsmanship?(Musou no Hitotachi(Meikyou Shisui(Konon Ittou(Transcendence: Baleful Omen
  /Which of the following was the result of Ei using Musou no Hitotachi?(Yashiori Island was split in half(Seirai Gorge was created(The Sacred Sakura Tree was Created(The Thunderbird was killed
  /Ei is the God of ______?(Eternity(Lightning(Inazuma(Creation
  /What is the first puppet prototype created by Ei?(Kunikuzushi(Balladeer(Scaramocchi(Raiden Shogun
  /What is Ei's favourite dessert?(Dango Milk(Sakura Mochi(Tricolor Dango(Egg Roll
  /How many spirits appear in Imperatrix Umbrosa Act II: Transient Dreams?(9(6(11(12
  #
  What is the current Dendro Archon's name?(Buer(Greater Lord Rukkhadevata(Irminsul(Nahida
  /What is Nahida's signature dish?(Halvamazd(Pita Pocket(Candied Ajilenakh Nut(Mushroom Hodgepodge
  /When is Nahida's birthday?(October 27th(April 21st(May 9th(August 11th
  /What is the name of Nahida's banner?(The Moongrass' Enlightenment(Everbloom Violet(Second Blooming(Twirling Lotus
  /What is the name of Nahida's constellation?(Sapientia Oromasdis(Leptailurus Cervarius(Vultur Volans(Umbrabilis Orchis
  /What is the local specialty needed for Nahida's ascension?(Kalpalata Lotus(Nilotpala Lotus(Sumeru Rose(Padisarah
  /What is Nahida's element?(Dendro(Anemo(Geo(Planto
  /What weapon does Nahida wield?(Catalyst(Sword(Staff(Bow
  /What is Nahida's relationship to Greater Lord Rukkhadevata?(She is her successor(She is her younger sibling(She is her child(She is her disciple
  /What is the purpose for celebrating the Sabzeruz Festival?(To celebrate Buer's birth(To celebrate Buer's Ascension(To celebrate the Akademia's creation(To celebrate more Primogems
  /Who did Nahida possess during the Archon Quest III, Act III?(Katheryne(Alhaitham(Collei(Dunyarzad
  /Which Harbinger did Nahida make a deal with?(Il Dottore(Scaramouche(Pierro(Pulcinella
  /What is Nahida's namecard called?(Crescent(Fruit of Wisdom(Daydream(Dew-Kissed
  /What is the Dendro Archon's vessel name?(Nahida(Buer(Rukkhadevata(Paimon
  /Nahida is the God of ______?(Wisdom(Dreams(Flowers(Sumeru
  /What is Nahida's favourtie food?(Candied Ajilenakh Nuts(Sabz Meat Stew(Rose Custard(Aaru Mixed Rice
  /What is Nahida's least favourite food?(Seafood(Sweets(Spicy Food(Noodles
  /Where was Nahida held captive at?(Sanctuary of Surasthana(Mausoleum of King Deshret(Ruins of Dahri(Fane of Ashvattha
  /Which Archon's elemental burst has the biggest radius?(Nahida(Zhongli(Ei(Venti
  /How many lines are in Nahida's constellation art?(Approx. 50(Approx. 70(Approx. 15(Approx. 20
`
/*Tried to read the file -> Require not defined error*/

// const fs = require('fs'); /*To read the Character_Array file*/
// var path = "./Trivia/Character_Array.txt";

// var list;
// try{ /*Read the file*/
// list = fs.readFileSync(path, "UTF8");
// }catch{ /*Shows the text if it cannot read the file*/
//     console.log("Ohno")
// }

var chara = list.split("#"); /*Split the Character Array*/

var vqns = chara[0].split("/"); /*Split by Questions*/
var zqns = chara[1].split("/");
var rqns = chara[2].split("/");
var nqns = chara[3].split("/");

const chara_array = [vqns, zqns, rqns, nqns] /*Array for different characters*/
var charanum = Math.floor(Math.random() * 4); /*Random character*/

var qnnum = Math.floor(Math.random() * 20); /*Random question number*/
var qn;

for(var i = 0; i < chara_array[charanum].length; i++){ /*Calls the randomized question*/
    
  if(i == qnnum){
      qn = chara_array[charanum][i].split("(") /*Splits the question into its questions and answers */
  }
}

document.getElementById("Question").innerHTML=qn[0]; /*Puts the Question in the Question Box*/

const nums = [1,2,3,4]
const order = []

for (var i = 0; i < 4; i++){ /*Randomize the order of Answers*/
  var opt = Math.floor(Math.random() * (nums.length)); /*Random Answer Location*/
  order.push(nums[opt]); /*Adds the number from nums into order*/
  nums.splice(opt,1); /*Removes the number from nums*/
}

for (var i = 0; i < 4; i++){ /*To place the answers*/
  var optname = "MYopt" + (i + 1)
  document.getElementById(optname).innerHTML=qn[order[i]];
}

//   $(document).ready(function() { /*For RestDB*/
//     const APIKEY = "663e531fa478852088da67f67";
//     getContacts();
//     $("#update-contact-container").hide();
//     $("#add-update-msg").hide();

//       let email = $("#account-email").val();
//       let password = $("#account-password").val();

//       let jsondata = {
//         "Email": email,
//         "Password": password,
//       };

// });