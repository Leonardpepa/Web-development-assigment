const buildItBtns = document.querySelectorAll(".card-btn");
const logo = document.querySelector(".logo");

const navigateToHome = () => {
  logo.addEventListener("click", () => {
    window.location.replace("index.html");
  });
};

const openBuildPage = () => {
  buildItBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      window.open("build.html", `${e.target.name}`);
      window.close();
    });
  });
};

openBuildPage();
navigateToHome();
