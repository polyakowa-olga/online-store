import data = require("../../assets/data.json");
import { component } from "../item/item";

console.log(data);
export function showProducts() {
  const productscontainer = document.getElementById(
    "products_container"
  ) as HTMLDivElement;
  const productsSort = document.createElement("div");
  const productsItems = document.createElement("div");
  productscontainer.appendChild(productsSort);
  productscontainer.appendChild(productsItems);

  productsSort.classList.add("sort-products");
  productsItems.classList.add("products-items");

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
