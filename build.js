const logo = document.querySelector(".logo");
const main = document.getElementById("main");
const title = document.createElement("h1");
const category = document.querySelector(".category");

const container = document.querySelector(".content-container");
const h2 = document.querySelector("h2");

h2.addEventListener("click", () => {
  container.style.display =
    container.style.display === "none" ? "grid" : "none";
});

const configureTitle = () => {
  title.innerText = window.name.toUpperCase();
  title.classList.add("title");
  main.insertBefore(title, category);
};

const navigateToHome = () => {
  logo.addEventListener("click", () => {
    window.location.replace("index.html");
    window.close();
  });
};

navigateToHome();
configureTitle();
