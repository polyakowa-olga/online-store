import { IProducts } from "../item/item";
import { getInputValue } from "./checkboxController";
import { checkValues } from "./dualSlider";

export function controllChanges() {
  const paramBox = document.querySelector(".filter-params");
  if (!paramBox)
    throw new Error('Error! Element with class "filter-params" not found!');
  paramBox.addEventListener("click", getInputValue);

  window.onload = checkValues;
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

export function getRangeValues() {
  //let arr: number[] = [];
  const price = document.querySelector("#fl-price");
  price?.childNodes[0].textContent;

  //  const el: EventTarget | null = event.target;
  //   let items = document.querySelectorAll('filter-list_item');
  //   items.forEach(el => {
  //      if (tar.classList.contains('filter-list_item')) {
  //arr.push(1)
  console.log(price?.firstChild?.nodeValue);
  //  }
  //  });
}
