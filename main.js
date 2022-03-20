var elToggler = document.querySelector(".toggler");
var elMenu = document.querySelector(".menu");

elToggler.addEventListener("click", function () {
  if (elMenu.classList.contains("active")) {
    elMenu.classList.remove("active");
    elToggler.querySelector("i").className = "fas fa-bars";
  } else {
    elMenu.classList.add("active");
    elToggler.querySelector("i").className = "fas fa-times";
  }
});
