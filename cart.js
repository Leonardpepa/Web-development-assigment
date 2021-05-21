const order = JSON.parse(sessionStorage.getItem("orderJSON"));
let cost = sessionStorage.getItem("cost");
let shippingCost = 0;
let insuranceCost = 0;
let updatedCost = 0;

const productsContainer = document.querySelector(".products");
const desktopCost = document.querySelector(".desktop-cost");
const totalcost = document.querySelector(".total-cost");
const checkOutBtn = document.querySelector(".btn");
const shipping = document.getElementById("shipping");
const insurance = document.getElementById("insurance");
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
  chooseInsurance();
  chooseShipping();
  submit();
};

const chooseShipping = () => {
  shipping.addEventListener("change", () => {
    const selectedIndex = shipping.options.selectedIndex;
    shippingCost = Number.parseInt(shipping.options[selectedIndex].value);
    updatedCost = shippingCost + insuranceCost + Number.parseInt(cost);
    displayTotalCost(updatedCost);
  });
};

const chooseInsurance = () => {
  insurance.addEventListener("change", () => {
    const selectedIndex = insurance.options.selectedIndex;
    insuranceCost = Number.parseInt(insurance.options[selectedIndex].value);
    updatedCost = shippingCost + insuranceCost + Number.parseInt(cost);
    displayTotalCost(updatedCost);
  });
}

const displayTotalCost = (updatedCost) => {
  totalcost.innerText = `Total Cost ${updatedCost}€`;
};

const submit = () => {
  checkOutBtn.addEventListener("click", () => {
    if (shipping.options.selectedIndex === 0 || insurance.options,selectedIndex === 0) {
      alert("YOU NEED TO FILL ALL THE FORMS");
    } else {
      submitBtn.click();
    }
  });
};

displayContent();
