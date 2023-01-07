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
    if (str) str += `&price=${obj.price[0]}to${obj.price[1]}`;
  }
  if (obj.stock.length) {
    if (!str) str += `stock=${obj.stock[0]}to${obj.stock[1]}`;
    if (str) str += `&stock=${obj.stock[0]}to${obj.stock[1]}`;
  }

  document.location.search = str;
}

export function getDataFromQueryString() {
  const arr = document.location.search.substring(1).split("&");

  for (let i = 0; i < arr.length; i++) {
    const arrProp = arr[i].split("=");
    const key:string = arrProp[0];
    const value:string = arrProp[1];
    for (const prop in chooseParamsObj) {
      if (key === prop && (key === "category" || key === "brand")) {
        if (!chooseParamsObj[prop as keyof typeof chooseParamsObj].includes(value)) {
          chooseParamsObj[prop as keyof typeof chooseParamsObj].push(value);
        }
      }
      if (key === prop && (key === "price" || key === "stock")) {
        const range = arrProp[1].split("to");
        chooseParamsObj[prop as keyof typeof chooseParamsObj].push(range[0], range[1]);
      }
    }
  }
  getParamsObj();
}
