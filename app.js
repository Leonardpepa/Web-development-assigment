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
      window.close();
      window.open("build.html", `${e.target.name}`);
    });
  });
};

navigateToHome();
openBuildPage();

cpus;
hdds;
gpus;
motherboards;
rams;
powerSupplys;
cases;
