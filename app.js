const buildItBtns = document.querySelectorAll(".card-btn");

const openBuildPage = () => {
  buildItBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      location.href = "build.html";
      sessionStorage.setItem("name", e.target.name);
    });
  });
};
openBuildPage();
