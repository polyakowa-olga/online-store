import data from ".././assets/data.json";
import { createFilterSection } from ".././components/filter/index";
import { showProducts } from ".././components/main/products";
import { showError } from "./error/error";
// import { showCart } from "./cart/cart";
import { openElement } from ".././components/item/item";
import { createBasket } from "../components/basket/basket";
import { getParamsObj } from "./filter/chooseParamsObj";
import { chooseParamsObj } from "./filter/chooseParamsObj";

export const enum PageId {
  MainPage = "main-page",
  CartPage = "cart-page",
  ItemPage = "item-page",
}

export function renderNewPage(idPage: string, i?: number) {
  const mainSection = document.querySelector(".main");
  if (mainSection) {
    if (idPage === PageId.MainPage) {
      mainSection.innerHTML = "";
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

      getParamsObj();

    } else if (idPage === `${PageId.ItemPage}`) {
      // document.location.search = "";
      mainSection.innerHTML = "";
      mainSection.setAttribute("id", `${idPage} `);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      mainSection.append(openElement(data.products[i!])); // сюда нужно передать объект для отрисовки
    } else if (idPage === PageId.CartPage) {
      // document.location.search = "";
      mainSection.innerHTML = "";
      mainSection.setAttribute("id", `${idPage} `);
      mainSection.append(createBasket());
    } else {
      // document.location.search = "";
      mainSection.innerHTML = "";
      mainSection.setAttribute("id", "error-page");
      mainSection.append(showError());
    }
  }
}

export function knowHashchange() {
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.slice(1).split("/");

    if (hash.length === 1) {
      return renderNewPage(hash[0]);
    } else {
      const i = Number(hash[1]) - 1;
      renderNewPage(hash[0], i);
    }
    // renderNewPage(hash);
  });
}
