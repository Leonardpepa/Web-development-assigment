const order = JSON.parse(sessionStorage.getItem("orderJSON"));
let cost = sessionStorage.getItem("cost");

const productsContainer = document.querySelector(".products");
const desktopCost = document.querySelector(".desktop-cost");
const totalcost = document.querySelector(".total-cost");
const checkOutBtn = document.querySelector(".btn");
const shipping = document.getElementById("shipping");
const submitBtn = document.querySelector(".submit-btn");

const displayDesktopCost = () => {
  desktopCost.innerHTML = `Customized Desktop ${cost}€`;
};

const createCartContent = (product) => {
  const div = document.createElement("div");
  div.classList.add("product");

  const details = document.createElement("div");
  details.classList.add("details");

  const img = document.createElement("img");
  img.src = product.poster_path;
  img.alt = "pc part";
  img.classList.add("product-img");

  const name = document.createElement("p");
  name.innerText = product.name;

  const quantity = document.createElement("p");
  quantity.innerText = "1x";

  const price = document.createElement("p");
  price.innerText = `${product.price}€`;

  //details.appendChild(img);
  details.appendChild(name);
  details.appendChild(quantity);
  details.appendChild(price);
  div.appendChild(img);
  div.appendChild(details);
  productsContainer.appendChild(div);
};

const displayContent = () => {
  order.forEach((product) => {
    createCartContent(product);
  });
  displayDesktopCost();
  chooseShipping();
  submit();
};

const chooseShipping = () => {
  shipping.addEventListener("click", () => {
    const selectedIndex = shipping.options.selectedIndex;
    displayTotalCost(selectedIndex);
  });
};

const displayTotalCost = (selected) => {
  const total =
    Number.parseInt(cost) + Number.parseInt(shipping.options[selected].value);
  totalcost.innerText = `Total Cost ${total}€`;
};

const submit = () => {
  checkOutBtn.addEventListener("click", () => {
    if (shipping.options.selectedIndex === 0) {
      alert("YOU NEED TO CHOOSE SHIPPING METHOD");
    } else {
      submitBtn.click();
    }
  });
};

displayContent();
