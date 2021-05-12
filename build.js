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
    if (e.target.classList[0] === "category-title") {
      e.target.classList.toggle("active");
      categ.children[1] && categ.children[1].classList.toggle("active");
    }
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

const createContent = () => {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  setTimeout(() => {
    cpus.forEach((cpu) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const div = document.createElement("div");
      div.innerHTML = `<img class = "card-img" src= "${cpu.poster_path}" alt= "pc part" />`;

      const details = document.createElement("div");
      details.classList.add("details");

      const name = document.createElement("p");
      name.classList.add("name");

      name.innerText = `Name : ${cpu.name}`;

      const ul = document.createElement("ul");
      ul.innerText = "Characteistics";

      const li1 = document.createElement("li");
      li1.innerText = `Family : ${cpu.characteristics.family}`;
      const li2 = document.createElement("li");
      li2.innerText = `Micro architecture : ${cpu.characteristics.microArchitecture}`;
      const li3 = document.createElement("li");
      li3.innerText = `Socket : ${cpu.characteristics.socket}`;

      const li4 = document.createElement("li");
      li4.innerText = `cores : ${cpu.characteristics.cores}`;

      const li5 = document.createElement("li");
      li5.innerText = `threads : ${cpu.characteristics.threads}`;

      const li6 = document.createElement("li");
      li6.innerText = `base clock : ${cpu.characteristics.baseClock}`;

      ul.appendChild(li1);
      ul.appendChild(li2);
      ul.appendChild(li3);
      ul.appendChild(li4);
      ul.appendChild(li5);
      ul.appendChild(li6);

      const input = document.createElement("input");
      input.type = "radio";
      input.classList.add("input");
      input.name = "price";

      const label = document.createElement("label");
      label.setAttribute("for", "price");
      label.classList.add("price-label");
      label.innerText = `Price : ${cpu.price}€`;

      details.appendChild(name);
      details.appendChild(ul);
      details.appendChild(input);
      details.appendChild(label);

      card.appendChild(div);
      card.appendChild(details);

      contentContainer.appendChild(card);
      category[0].appendChild(contentContainer);
    });
  }, 100);
};

createContent();
navigateToHome();
navigateNavBar();
configureTitle();
