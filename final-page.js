const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("active");
});

let bnt = document.getElementById("bnt");
let balert = document.getElementById("bnt-alert");
let X = document.getElementById("X");
let btn = document.getElementById("submit");
btn.addEventListener("click", func);
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

////////Frej's Discount Code Javascript! Everything Under + line 12 + 13.
////////

function func() {
  let code = document.getElementById("code").value;

  if (code === "guide20wide") {
    console.log("testdisc");
    alert(
      "Discount Activated!\n-20% on the total price!\nYour Total is now 13,440 SEK."
    );
  } else {
    alert("Wrong Discount Code");
  }
}
