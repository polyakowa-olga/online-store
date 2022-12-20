import { IProducts } from "./item/item";

export function filter(arr: IProducts[], param: string, value: string): number[] {
  const result: number[] = [];
  arr.forEach((el) => {
    if (param === "category" || param === "brand") {
      if (el[param] === value) {
        result.push(el.id);
      }
    }
  });

  return result;
}
