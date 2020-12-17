(function () {
  let button = document.querySelector(".btn");
  let background = document.querySelector("body");
  let text = document.querySelectorAll(".text");

  button.addEventListener("click", darkMode);

  function darkMode() {
    if (background.classList.contains("dark")) {
      background.classList.remove("dark");
      text.classList.remove("dark");
    } else {
      background.classList.add("dark");
      text.classList.add("dark");
    }
  }
})();
