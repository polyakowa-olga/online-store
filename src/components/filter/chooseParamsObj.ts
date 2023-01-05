import { IProducts } from "../item/item";
import data = require("../../assets/data.json");

export interface IChooseParams {
  category: string[];
  brand: string[];
  price: number[];
  stock: number[];
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
