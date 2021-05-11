const logo = document.querySelector(".logo");
const main = document.getElementById("main");
const title = document.createElement("h1");
const category = document.querySelector(".category");
const configureTitle = () => {
  title.innerText = window.name.toUpperCase();
  title.classList.add("title");
  main.insertBefore(title, category);
};

const navigateToHome = () => {
  logo.addEventListener("click", () => {
    window.location.replace("index.html");
  });
};

navigateToHome();
configureTitle();

setTimeout(() => {
  console.log(cpus);
}, 1000);
