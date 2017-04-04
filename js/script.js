var navMain = document.querySelector(".main-navigation__list");
var navToggle = document.querySelector(".main-navigation__toggle");
var showMap = document.querySelector(".map__sedona");

navMain.classList.remove("main-navigation__list--nojs");
navMain.classList.add("main-navigation__list--closed");
navToggle.classList.add("main-navigation__toggle--closed");
showMap.classList.remove("map__sedona--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-navigation__list--closed")) {

    navMain.classList.remove("main-navigation__list--closed");
    navMain.classList.add("main-navigation__list--opened");

    navToggle.classList.remove("main-navigation__toggle--closed");
    navToggle.classList.add("main-navigation__toggle--opened");

  } else {

    navMain.classList.remove("main-navigation__list--opened");
    navMain.classList.add("main-navigation__list--closed");

    navToggle.classList.remove("main-navigation__toggle--opened");
    navToggle.classList.add("main-navigation__toggle--closed");
  }

});
