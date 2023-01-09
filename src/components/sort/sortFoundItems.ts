import { chooseParamsObj } from "../filter/chooseParamsObj";
import { IProducts } from "../item/item";
import { updateQueryString } from "../queryString";

export function sortFoundItems(method: string, arr: IProducts[]) {
  const productItems = document.querySelectorAll(".block-element:not(.hide)");
  if (method === "priceASC") {
    arr.sort((a, b) => a.price - b.price);
  }
  if (method === "priceDESC") {
    arr.sort((a, b) => (a.price - b.price) * -1);
  }
  if (method === "ratingASC") {
    arr.sort((a, b) => a.rating - b.rating);
  }
  if (method === "ratingDESC") {
    arr.sort((a, b) => (a.rating - b.rating) * -1);
  }
  let num = 0;
  arr.forEach((el) => {
    productItems.forEach((item) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (el.id === +item.getAttribute("id")!) {
        (item as HTMLDivElement).style.order = `${num}`;
        num += 1;
      }
    });
  });
}

export function addMethodSortToParamsObj(event: Event) {
  const ev = event.target as HTMLSelectElement;
  const value = ev.value;
  if (!value.startsWith("Sort by") && !chooseParamsObj.sort) return;
  let metod = "";
  if (chooseParamsObj.sort && value === "Sort options:")
    delete chooseParamsObj.sort;
  console.log(chooseParamsObj);
  if (value.startsWith("Sort by")) {
    switch (value) {
      case "Sort by price ASC":
        metod = "priceASC";
        if (chooseParamsObj.sort === metod) return;
        break;
      case "Sort by price DESC":
        metod = "priceDESC";
        if (chooseParamsObj.sort === metod) return;
        break;
      case "Sort by rating ASC":
        metod = "ratingASC";
        if (chooseParamsObj.sort === metod) return;
        break;
      case "Sort by rating DESC":
        metod = "ratingDESC";
        if (chooseParamsObj.sort === metod) return;
        break;
    }
    chooseParamsObj.sort = metod;
  }
  console.log(chooseParamsObj);

  updateQueryString(chooseParamsObj);
}
