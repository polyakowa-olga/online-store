import { IProducts } from "../item/item";

const filters = document.querySelector("#filter-container");

function searchCheckedItems() {
  let checkedItems = [];
}

export function filter(
  arr: IProducts[],
  param: string,
  value: string
): number[] {
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
