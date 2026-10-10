// Mobile menu toggle + footer year
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Click a research picture to see it full-screen; click again or press Esc to close
  var box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = '<img alt=""><p></p>';
  document.body.appendChild(box);
  function close() { box.classList.remove("open"); }
  box.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  document.querySelectorAll(".figures img").forEach(function (img) {
    img.addEventListener("click", function () {
      box.querySelector("img").src = img.src;
      var cap = img.parentNode.querySelector("figcaption");
      box.querySelector("p").innerHTML = cap ? cap.innerHTML : "";
      box.classList.add("open");
    });
  });
});
