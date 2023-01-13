import { IProducts } from "../../item/item";
import { Params } from "./index";

export type IAmountItemsInCategory = [category: string, amountItems: number];

export function getFilterParam(
  arr: IProducts[],
  param: string
): IAmountItemsInCategory[] {
  const result: IAmountItemsInCategory[] = [];
  const arrParams: string[] = [];

  arr.forEach((el) => {
    if (param === Params.category || param === Params.brand) {
      arrParams.push(el[param]);
    }
  });

  const uniqParam = new Set(arrParams);

  uniqParam.forEach((el) => {
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (param === Params.category || param === Params.brand) {
        if (el === arr[i][param]) {
          amount++;
        }
      }
    }
    result.push([el, amount]);
  });

  return result;
}
