var specificchara = localStorage.getItem("chara"); /*Get random character*/
var specificimg = "";

if (specificchara == 0) {
  specificimg = "Venti/Venti";
} else if (specificchara == 1) {
  specificimg = "Zhongli/Zhongli";
} else if (specificchara == 2) {
  specificimg = "Raiden/Raiden";
} else if (specificchara == 3) {
  specificimg = "Nahida/Nahida";
}

document.getElementById("Charalose").innerHTML =
  /*Put Img*/
  '<img src="./Artworks/' + specificimg + '_0HP.png" id="MYlose" alt="oop" />';

document.getElementById("MYreturn").onclick = () => {
  window.location.href = "http://127.0.0.1:5500/homepage.html";
};
