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

// Haiying's js code
const btn_for_scrolling = document.getElementById("btn-for-scrolling")
function scrolling (){ 
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}
btn_for_scrolling.addEventListener("click", scrolling );


////////Frej's Discount Code Javascript////////
