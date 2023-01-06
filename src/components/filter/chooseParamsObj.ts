import { IProducts } from "../item/item";
import data = require("../../assets/data.json");
import { show } from "./showFilterItems";

export interface IChooseParams {
  category: string[];
  brand: string[];
  price: number[];
  stock: number[];
}

export let chooseParamsObj: IChooseParams = {
  category: [],
  brand: [],
  price: [],
  stock: [],
};

export function sort() {
  const res: string[] = [];
  let result: IProducts[] = [];
  if (chooseParamsObj.category.length) {
    data.products.forEach((el) => {
      for (let i = 0; i < chooseParamsObj.category.length; i++) {
        if (el.category === chooseParamsObj.category[i]) {
          result.push(el);
        }
      }
    });
    if (chooseParamsObj.brand.length) {
      const resultBrand: IProducts[] = [];
      result.forEach((el) => {
        for (let i = 0; i < chooseParamsObj.brand.length; i++) {
          if (
            chooseParamsObj.brand.includes(el.brand) &&
            !resultBrand.includes(el)
          ) {
            resultBrand.push(el);
          }
        }
      });
      result = resultBrand.slice();
    }

    if (chooseParamsObj.price.length) {
      const resultPrice: IProducts[] = [];
      result.forEach((el) => {
        if (
          el.price <= chooseParamsObj.price[1] &&
          el.price >= chooseParamsObj.price[0]
        ) {
          resultPrice.push(el);
          console.log(el.price);
          console.log(chooseParamsObj.price[1]);
          console.log(chooseParamsObj.price[0]);
        }
      });
      result = resultPrice.slice();
    }

    if (chooseParamsObj.stock.length) {
      const resultStock: IProducts[] = [];
      result.forEach((el) => {
        if (
          el.stock <= chooseParamsObj.stock[1] &&
          el.stock >= chooseParamsObj.stock[0]
        ) {
          resultStock.push(el);
          console.log(el.stock);
          console.log(chooseParamsObj.stock[1]);
          console.log(chooseParamsObj.stock[0]);
        }
      });
      result = resultStock.slice();
    }

    result.forEach((el) => {
      res.push(`${el.id}`);
    });
  }
  return res;
}

export function saveParamsObj() {
  localStorage.setItem("ParamsObj", JSON.stringify(chooseParamsObj));
}

export function getParamsObj() {
  if (localStorage.getItem("ParamsObj")) {
    chooseParamsObj = JSON.parse(localStorage.getItem("ParamsObj"));

    const list = document.querySelectorAll(".input-box");
    list.forEach((el) => {
      if (el.closest("#fl-category")) {
        if (chooseParamsObj.category.includes(el.childNodes[1].textContent)) {
          el.childNodes.forEach((element) => {
            element.classList.add("active");
          });
        }
      }
      if (el.closest("#fl-brand")) {
        if (chooseParamsObj.brand.includes(el.childNodes[1].textContent)) {
          el.childNodes.forEach((element) => {
            element.classList.add("active");
          });
        }
      }
    });

    const input = document.querySelectorAll(".range-input");

    input.forEach((el) => {
      const slides = el.querySelectorAll("input");
      if (el.closest("#fl-price") && chooseParamsObj.price.length) {
        slides[0].value = `${chooseParamsObj.price[0]}`;
        slides[1].value = `${chooseParamsObj.price[1]}`;
      } else if (el.closest("#fl-stock") && chooseParamsObj.stock.length) {
        slides[0].value = `${chooseParamsObj.stock[0]}`;
        slides[1].value = `${chooseParamsObj.stock[1]}`;
      } else {
        slides[0].value = `${slides[0].getAttribute("min")}`;
        slides[1].value = `${slides[1].getAttribute("max")}`;
      }
      const displayElement = el.querySelectorAll(".values")[0];
      displayElement.innerHTML = `$${slides[0].value}   ⟷   $${slides[1].value}`;
    });
  }

  show();
}
