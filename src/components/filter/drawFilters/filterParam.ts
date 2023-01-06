import { IProducts } from "../../item/item";

export function getFilterParam(
  arr: IProducts[],
  param: string
): [string, number][] {
  const result: [string, number][] = [];
  const arrParams: string[] = [];

  arr.forEach((el) => {
    if (param === "category" || param === "brand") {
      arrParams.push(el[param]);
    }
  });

  const uniqParam = new Set(arrParams);

  uniqParam.forEach((el) => {
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (param === "category" || param === "brand") {
        if (el === arr[i][param]) {
          amount++;
        }
      }
    }
    result.push([el, amount]);
  });

  return result;
}
