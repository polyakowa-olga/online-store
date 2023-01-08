import { chooseParamsObj } from "./chooseParamsObj";
import { showNumberEachParam } from "../filter/showNumberEachParam";
import data = require("../../assets/data.json");
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

  chooseParamsObj.brand = [];
  chooseParamsObj.category = [];
  chooseParamsObj.price = [];
  chooseParamsObj.stock = [];
  if (chooseParamsObj.sort) delete chooseParamsObj.sort;

  const productItems = document.querySelectorAll(".block-element");
  productItems.forEach((el) => {
    el.classList.remove("hide");
  });

  const amount = document.querySelectorAll(".items-amount");
  amount.forEach((el) => {
    const textBefore = el.textContent;
    el.textContent = `${textBefore?.substring(2)}${textBefore?.substring(1)}`;
  });
  window.location.search = "";
}
