import data from ".././assets/data.json";
import { createFilterSection } from ".././components/filter/index";
import { showProducts } from ".././components/main/products";
import { showError } from "./error/error";
import { showCart } from "./cart/cart";
import { component } from ".././components/item/item"

export const enum PageId {
  MainPage = "main-page",
  CartPage = "cart-page",
  ItemPage = "item-page",
}

export function renderNewPage(idPage: string) {
  const mainSection = document.querySelector(".main");
  if (mainSection) {
    if (idPage === PageId.MainPage) {
      mainSection.innerHTML = "";
      console.log(idPage);
      mainSection.setAttribute("id", `${idPage}`);
      const filterBox = document.createElement("div");
      filterBox.classList.add("filter-container");
      filterBox.setAttribute("id", "filter_container");
      mainSection.append(filterBox);
      createFilterSection(data.products);

      const productsBox = document.createElement("div");
      productsBox.classList.add("products-container");
      productsBox.setAttribute("id", "products_container");
      mainSection.append(productsBox);
      showProducts();
    } else if (idPage === PageId.ItemPage) {
      mainSection.innerHTML = "";
      mainSection.setAttribute("id", `${idPage}`);
      component(); // сюда нужно передать объект для отрисовки
    } else if (idPage === PageId.CartPage) {
      mainSection.innerHTML = "";
      mainSection.setAttribute("id", `${idPage}`);
      mainSection.append(showCart());
    } else {
      mainSection.innerHTML = "";
      mainSection.setAttribute("id", "error-page");
      mainSection.append(showError());
    }
  }
}

export function knowHashchange() {
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.slice(1);
    renderNewPage(hash);
  });
}
