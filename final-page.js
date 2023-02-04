const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("active");
});

let bnt = document.getElementById("bnt");
let balert = document.getElementById("bnt-alert");
let X = document.getElementById("X");
bnt.onclick = function () {
  balert.style.display = "block";
};
X.onclick = function () {
  window.location.replace("index.html");
};

let back = document.getElementById("back");
back.onclick = function () {
  window.location.replace("index.html");
};

////////Frej's Discount Code Javascript////////
