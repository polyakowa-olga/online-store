import { getInputValue } from "./checkboxController";
import { chooseParamsObj } from "./chooseParamsObj";
import { sort } from "./chooseParamsObj";
import { updateQueryString } from "../queryString";

export function showFilterItems(event: Event) {
  const ev = event.target as HTMLElement;
  let param = "";
  if (ev.closest("#fl-category")) {
    param = "category";
  }
  if (ev.closest("#fl-brand")) {
    param = "brand";
  }
  const checkboxChange = getInputValue(event, param, chooseParamsObj);
  if (checkboxChange) {
    if (param === "category" || param === "brand") {
      if (checkboxChange[1] == "add") {
        chooseParamsObj[param].push(checkboxChange[0]);
      } else {
        chooseParamsObj[param].splice(
          chooseParamsObj[param].indexOf(checkboxChange[0]),
          1
        );
      }
    }
  }

  show();

  // updateParamsObj();
  updateQueryString(chooseParamsObj);
}

export function show() {
  const params: string[] = sort();
  const productItems = document.querySelectorAll(".block-element");

  if (params.length) {
    productItems.forEach((el) => {
      el.classList.add("hide");
      const id = el.getAttribute("id") as string;

      if (params.includes(id)) {
        el.classList.remove("hide");
      }
    });
  } else if (
    chooseParamsObj.category.length ||
    chooseParamsObj.brand.length ||
    chooseParamsObj.price.length ||
    chooseParamsObj.stock.length
  ) {
    productItems.forEach((el) => {
      el.classList.add("hide");
      const mainBox = document.querySelector(".products-container");
      if (mainBox) {
        mainBox.textContent = "NOT FOUND";
        (<HTMLElement>mainBox).style.fontSize = "64px";
        (<HTMLElement>mainBox).style.color = "red";
      }
    });
  } else {
    productItems.forEach((el) => {
      el.classList.remove("hide");
    });
  }
}
