import { chooseParamsObj } from "./chooseParamsObj";

export function resetFilters() {
  const list = document.querySelectorAll(".input-box");
  list.forEach((el) => {
    el.childNodes.forEach((el) => {
      (<Element>el).classList.remove("active");
    });
  });

  const input = document.querySelectorAll(".range-input");
  console.log(input);
  input.forEach((el) => {
    const slides = el.querySelectorAll("input");
    slides[0].value = `${slides[0].getAttribute("min")}`;
    slides[1].value = `${slides[1].getAttribute("max")}`;
    const displayElement = el.querySelectorAll(".values")[0];
    displayElement.innerHTML = `$${slides[0].value}   ⟷   $${slides[1].value}`;
  });

  // for (const key in chooseParamsObj) {
  //   chooseParamsObj[key] = [];
  // }
  chooseParamsObj.category = [];
  chooseParamsObj.brand = [];
  chooseParamsObj.price = [];
  chooseParamsObj.stock = [];

  const productItems = document.querySelectorAll(".block-element");
  productItems.forEach((el) => {
    el.classList.remove("hide");
  });

  window.location.search = "";
}
