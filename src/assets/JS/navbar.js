window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("fixed-top", window.scrollY > 0);
})
