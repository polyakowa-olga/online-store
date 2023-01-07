import { IChooseParams } from "./filter/chooseParamsObj";
import { chooseParamsObj } from "./filter/chooseParamsObj";
import { getParamsObj } from "./filter/chooseParamsObj";

export function updateQueryString(obj: IChooseParams) {
  let str = "";
  if (obj.category.length) {
    obj.category.forEach((el) => {
      if (!str) str += `category=${el}`;
      else if (str) str += `&category=${el}`;
    });
  }
  if (obj.brand.length) {
    obj.brand.forEach((el) => {
      if (!str) str += `brand=${el}`;
      else if (str) str += `&brand=${el}`;
    });
  }
  if (obj.price.length) {
    if (!str) str += `price=${obj.price[0]}to${obj.price[1]}`;
    else if (str) str += `&price=${obj.price[0]}to${obj.price[1]}`;
  }
  if (obj.stock.length) {
    if (!str) str += `stock=${obj.stock[0]}to${obj.stock[1]}`;
    else if (str) str += `&stock=${obj.stock[0]}to${obj.stock[1]}`;
  }
  if (obj.copy_link) {
    if (!str) str += `copy_link=${obj.copy_link}`;
    else if (str) str += `&copy_link=${obj.copy_link}`;
  }
  document.location.search = str;
}

export function getDataFromQueryString() {
  const arr = document.location.search.substring(1).split("&");

  for (let i = 0; i < arr.length; i++) {
    const arrProp = arr[i].split("=");
    const key: string = arrProp[0];
    const value: string = arrProp[1];
    for (const prop in chooseParamsObj) {
      if (key === prop && key === "category") {
        if (!chooseParamsObj.category.includes(value)) {
          chooseParamsObj.category.push(value);
        }
      }
      if (key === prop && key === "brand") {
        if (!chooseParamsObj.brand.includes(value)) {
          chooseParamsObj.brand.push(value);
        }
      }
      if (key === prop && key === "price") {
        const range = arrProp[1].split("to");
        chooseParamsObj.price.push(+range[0], +range[1]);
      }
      if (key === prop && key === "stock") {
        const range = arrProp[1].split("to");
        chooseParamsObj.stock.push(+range[0], +range[1]);
      }
      if (key === "copy_link") {
        chooseParamsObj.copy_link = arrProp[1];
      }
    }
  }
  console.log();
  getParamsObj();
}
