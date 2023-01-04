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

export function getRangeValues() {
  //let arr: number[] = [];
  const price = document.querySelector('#fl-price');
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