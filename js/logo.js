function logo() {
  document.getElementById("top").classList.add("clicked");
  document.getElementById("bottom").classList.add("clicked");
  document.getElementById("logo").classList.add("clicked");
  document.getElementById("logo").classList.remove("yureru-s");
}

function logo1() {
  document.getElementById("middle").classList.add("clicked");
}

function logo2() {
  document.getElementById("header").classList.add("clicked");
  document.getElementById("main").classList.add("clicked");
  document.getElementById("logo").classList.add("hidden");
}

document.getElementById("logo").addEventListener("click", function () {
  logo();
  window.setTimeout(function () {
    logo1();
  }, 500);
  window.setTimeout(function () {
    logo2();
  }, 3000);
});

window.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(function () {
    logo();
  }, 8500);
  window.setTimeout(function () {
    logo1();
  }, 9000);
  window.setTimeout(function () {
    logo2();
  }, 10500);
});
