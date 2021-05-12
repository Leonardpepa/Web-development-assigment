const logo = document.querySelector(".logo");
const main = document.getElementById("main");
const title = document.createElement("h1");
const category = document.querySelectorAll(".category");
const container = document.querySelector(".content-container");

const navLinks = document.querySelectorAll(".nav-link");

if (!window.name) {
  window.location.replace("index.html");
  window.close();
}

category.forEach((categ) => {
  categ.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    categ.children[1] && categ.children[1].classList.toggle("active");
  });
});

const configureTitle = () => {
  title.innerText = window.name.toUpperCase();
  title.classList.add("title");
  main.insertBefore(title, main.firstChild);
};

const navigateToHome = () => {
  logo.addEventListener("click", () => {
    window.open("index.html");
    window.close();
  });
};

const navigateNavBar = () => {
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      window.close();
      window.open(`index.html#${e.target.name}`);
    });
  });
};

const createContent = () => {};

navigateToHome();
navigateNavBar();
configureTitle();
