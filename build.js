const logo = document.querySelector(".logo");
const main = document.getElementById("main");
const title = document.createElement("h1");
const category = document.querySelectorAll(".category");
const container = document.querySelector(".content-container");

const navLinks = document.querySelectorAll(".nav-link");
const dataArray = [];

const render = () => {
  if (!window.name) {
    window.open("index.html");
    window.close();
  } else {
    navigateToHome();
    navigateNavBar();
    mapData(window.name);
    configureTitle();
    displayAllData();
  }
};

const mapData = (name) => {
  const filteredCpus = [];
  const filteredMotherbaords = [];

  setTimeout(() => {
    cpus.forEach((cpu) => {
      cpu.name[0].toUpperCase() === name[0].toUpperCase() &&
        filteredCpus.push(cpu);
    });
  }, 50);

  setTimeout(() => {
    motherboards.forEach((board) => {
      board.characteristics.model[0].toUpperCase() === name[0].toUpperCase() &&
        filteredMotherbaords.push(board);
    });
  }, 50);

  dataArray.push(filteredCpus);
  dataArray.push(filteredMotherbaords);
  dataArray.push(cases);
  dataArray.push(powerSupplys);
  dataArray.push(rams);
  dataArray.push(hdds);
  dataArray.push(gpus);
};

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

const createContent = (list, index) => {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  setTimeout(() => {
    list.forEach((item) => {
      createCard(item, contentContainer, index);
    });
  }, 100);
};

const createCard = (item, contentContainer, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const div = document.createElement("div");
  div.innerHTML = `<img class = "card-img" src= "${item.poster_path}" alt= "pc part" />`;

  const details = document.createElement("div");
  details.classList.add("details");

  const name = document.createElement("p");
  name.classList.add("name");

  name.innerText = `Name : ${item.name}`;

  const ul = document.createElement("ul");
  ul.innerText = "Characteristics";

  for (key in item.characteristics) {
    const li = document.createElement("li");
    li.innerText = `${key} : ${item.characteristics[key]}`;
    ul.appendChild(li);
  }

  const input = document.createElement("input");
  input.type = "radio";
  input.classList.add("input");
  input.name = "price";

  const label = document.createElement("label");
  label.setAttribute("for", "price");
  label.classList.add("price-label");
  label.innerText = `Price : ${item.price}€`;

  details.appendChild(name);
  details.appendChild(ul);
  details.appendChild(input);
  details.appendChild(label);

  card.appendChild(div);
  card.appendChild(details);

  contentContainer.appendChild(card);
  category[index].appendChild(contentContainer);
};

const displayAllData = () => {
  for (let i = 0; i < dataArray.length; i++) {
    createContent(dataArray[i], i);
  }
};

render();
