import { IChooseParams } from "./filter/chooseParamsObj";
import { chooseParamsObj } from "./filter/chooseParamsObj";
import { getParamsObj } from "./filter/chooseParamsObj";
import { Params } from "./filter/drawFilters/index";

export function updateQueryString(obj: IChooseParams) {
  let str = "";
  if (obj.category.length) {
    obj.category.forEach((el) => {
      if (!str) str += `category=${el}`;
      else str += `&category=${el}`;
    });
  }
  if (obj.brand.length) {
    obj.brand.forEach((el) => {
      if (!str) str += `brand=${el}`;
      else str += `&brand=${el}`;
    });
  }
  if (obj.price.length) {
    if (!str) str += `price=${obj.price[0]}to${obj.price[1]}`;
    else str += `&price=${obj.price[0]}to${obj.price[1]}`;
  }
  if (obj.stock.length) {
    if (!str) str += `stock=${obj.stock[0]}to${obj.stock[1]}`;
    else str += `&stock=${obj.stock[0]}to${obj.stock[1]}`;
  }
  if (obj.copyLink) {
    if (!str) str += `copyLink=${obj.copyLink}`;
    else str += `&copyLink=${obj.copyLink}`;
  }
  if (obj.sort) {
    if (!str) str += `sort=${obj.sort}`;
    else str += `&sort=${obj.sort}`;
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
      if (key === prop && key === Params.category) {
        if (!chooseParamsObj.category.includes(value)) {
          chooseParamsObj.category.push(value);
        }
      }
      if (key === prop && key === Params.brand) {
        if (!chooseParamsObj.brand.includes(value)) {
          chooseParamsObj.brand.push(value);
        }
      }
      if (key === prop && key === Params.price) {
        const range = arrProp[1].split("to");
        chooseParamsObj.price.push(+range[0], +range[1]);
      }
      if (key === prop && key === Params.stock) {
        const range = arrProp[1].split("to");
        chooseParamsObj.stock.push(+range[0], +range[1]);
      }
      if (key === Params.copyLink) {
        chooseParamsObj.copyLink = arrProp[1];
      }
      if (key === Params.sort) {
        chooseParamsObj.sort = arrProp[1];
      }
    }
  }
  console.log();
  getParamsObj();
}
