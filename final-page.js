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

// Haiying's js code
const btn_for_scrolling = document.getElementById("btn-for-scrolling")

function scrolling (){ 
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
};

function condition(){
  let Distance_to_top = document.documentElement.scrollTop;
  if(Distance_to_top<250){
    btn_for_scrolling.style.display="none"
  }
  else{
    btn_for_scrolling.style.display="block"
  }
}
window.onscroll = condition;
btn_for_scrolling.addEventListener("click", scrolling );




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
