import { IProducts } from "../item/item";
import data = require("../../assets/data.json");
import { show } from "./showFilterItems";

export interface IChooseParams {
  category: string[];
  brand: string[];
  price: number[];
  stock: number[];
  copy_link?: string;
}

export const chooseParamsObj: IChooseParams = {
  category: [],
  brand: [],
  price: [],
  stock: [],
};

export function sort() {
  const res: string[] = [];
  let result: IProducts[] = [];

  if (chooseParamsObj.category.length) {
    if (!result.length) {
      data.products.forEach((el) => {
        for (let i = 0; i < chooseParamsObj.category.length; i++) {
          if (el.category === chooseParamsObj.category[i]) {
            result.push(el);
          }
        }
      });
    } else {
      const resultCategory: IProducts[] = [];
      result.forEach((el) => {
        for (let i = 0; i < chooseParamsObj.category.length; i++) {
          if (
            chooseParamsObj.category.includes(el.category) &&
            !resultCategory.includes(el)
          ) {
            resultCategory.push(el);
          }
        }
      });
      result = resultCategory.slice();
    }
  }
  if (chooseParamsObj.brand.length) {
    if (!result.length) {
      data.products.forEach((el) => {
        for (let i = 0; i < chooseParamsObj.brand.length; i++) {
          if (el.brand === chooseParamsObj.brand[i]) {
            result.push(el);
          }
        }
      });
    } else {
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
  }

  if (chooseParamsObj.price.length) {
    const arr: IProducts[] = result.length ? result : data.products;
    const resultPrice: IProducts[] = [];
    arr.forEach((el) => {
      if (
        el.price <= chooseParamsObj.price[1] &&
        el.price >= chooseParamsObj.price[0]
      ) {
        resultPrice.push(el);
      }
    });
    result = resultPrice.slice();
  }

  if (chooseParamsObj.stock.length) {
    const arr: IProducts[] = result.length ? result : data.products;
    const resultStock: IProducts[] = [];
    arr.forEach((el) => {
      if (
        el.stock <= chooseParamsObj.stock[1] &&
        el.stock >= chooseParamsObj.stock[0]
      ) {
        resultStock.push(el);
      }
    });
    result = resultStock.slice();
  }

  result.forEach((el) => {
    res.push(`${el.id}`);
  });

  return res;
}

export function getParamsObj() {
  const list = document.querySelectorAll(".input-box");
  list.forEach((el) => {
    if (el.closest("#fl-category")) {
      if (chooseParamsObj.category.includes(el.childNodes[1].textContent!)) {
        el.childNodes.forEach((element) => {
          (<Element>element).classList.add("active");
        });
      }
    }
    if (el.closest("#fl-brand")) {
      if (chooseParamsObj.brand.includes(el.childNodes[1].textContent!)) {
        el.childNodes.forEach((element) => {
          (<Element>element).classList.add("active");
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

  show();
}
