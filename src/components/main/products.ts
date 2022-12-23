import data = require("../../assets/data.json");
import { component } from "../item/item";
// import { sort } from"./sort";

console.log(data);
export function showProducts() {
  const productscontainer = document.getElementById(
    "products_container"
  ) as HTMLDivElement;
  const productsSort = document.createElement("div");
  const productsItems = document.createElement("div");
  const sortBar = document.createElement("div");
  const sortBarSelect = document.createElement("select");
  const viewAmountProducts = document.createElement("div");
  const amountProdunctsSpan = document.createElement("span");
  const amountProduncts = document.createElement("p");
  const searchBar = document.createElement("div");
  const viewProducts = document.createElement("div");
  const viewProductsSmall = document.createElement("div");
  const viewProductsBig = document.createElement("div");
  const searchProduct = document.createElement("input");
  productscontainer.appendChild(productsSort);
  productscontainer.appendChild(productsItems);

  // create select and option
  const sortArray = [
    "Sort options:",
    "Sort by price ASC",
    "Sort by price DESC",
    "Sort by rating ASC",
    "Sort by rating DESC",
    "Sort by discount ASC",
    "Sort by discount DESC",
  ];
  for (let i = 0; i < sortArray.length; i++) {
    const option = document.createElement("option");
    option.value = sortArray[i];
    option.text = sortArray[i];
    sortBarSelect.add(option);
  }

  productsSort.appendChild(sortBar);
  sortBar.appendChild(sortBarSelect);
  productsSort.appendChild(viewAmountProducts);
  productsSort.appendChild(searchBar);
  searchBar.appendChild(searchProduct);
  productsSort.appendChild(viewProducts);
  viewProducts.appendChild(viewProductsSmall);
  viewProducts.appendChild(viewProductsBig);
  viewAmountProducts.appendChild(amountProduncts);

  productsSort.classList.add("sort-products");
  productsItems.classList.add("products-items");
  viewAmountProducts.classList.add("view-amount-products");
  searchBar.classList.add("search-bar");
  viewProducts.classList.add("view-products");
  viewProductsSmall.classList.add("view-products-small");
  viewProductsBig.classList.add("view-products-big");
  sortBarSelect.classList.add("sort-bar-select");

  amountProdunctsSpan.innerText = `${data.products.length}`;
  amountProduncts.innerHTML = amountProduncts.innerText =
    `Found: ` + amountProdunctsSpan.outerHTML;

  searchProduct.setAttribute("type", "search");
  searchProduct.placeholder = "Search product";

  for (let i = 0; i < data.products.length; i++) {
    const Element = data.products[i];
    const name = Element.title;
    const path = Element.thumbnail;
    const brand = Element.brand;
    const category = Element.category;
    const price = Element.price;
    const discount = Element.discountPercentage;
    const rating = Element.rating;
    const stock = Element.stock;
    productsItems.appendChild(
      component(name, path, brand, category, price, discount, rating, stock)
    );
  }
}
