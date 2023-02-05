const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const dropdowns = document.querySelectorAll(".dropdown");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("active");
});

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".dropdown-menu");
  const options = dropdown.querySelectorAll(".dropdown-menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("dropdown-menu-open");
  });
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;

      select.classList.remove("select-clicked");

      caret.classList.remove("caret-rotate");

      menu.classList.remove("menu-open");

      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});


// Haiying's js code
const btn_for_scrolling = document.getElementById("btn-for-scrolling")
function scrolling (){ 
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}
btn_for_scrolling.addEventListener("click", scrolling );
