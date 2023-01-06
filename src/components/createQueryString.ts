import { IChooseParams } from "./filter/chooseParamsObj";

export function createQueryString(obj: IChooseParams) {
  let str = "";
  if (obj.category.length) {
    obj.category.forEach((el) => {
      if (!str) str += `category=${el}`;
      else str += `↕${el}`;
    });
  }
  if (obj.brand.length) {
    obj.brand.forEach((el) => {
      if (!str) str += `brand=${el}`;
      else if (str) str += `&brand=${el}`;
      else str += `↕${el}`;
    });
  }
  if (obj.price.length) {
    if (!str) str += `price=${obj.price[0]}↕${obj.price[1]}`;
    if (str) str += `&price=${obj.price[0]}↕${obj.price[1]}`;
  }
  if (obj.stock.length) {
    if (!str) str += `stock=${obj.stock[0]}↕${obj.stock[1]}`;
    if (str) str += `&stock=${obj.stock[0]}↕${obj.stock[1]}`;
  }

  window.location.search = str;
  console.log(str);
}

export function updateParamsObj() {
  const arr = document.location.search.substring(1).split("&");
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].startsWith())

  // }
  console.log(arr);
}
