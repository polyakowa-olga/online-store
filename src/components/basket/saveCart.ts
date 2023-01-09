import { basket } from "./basket";
import data = require("../../assets/data.json");

export function saveCart() {
  const arr: number[] = [];
  basket.forEach((el) => {
    arr.push(el.id);
  });
  localStorage.setItem("cart", JSON.stringify(arr));
}

export function getCart() {
  if (localStorage.getItem("cart")) {
    const arr = JSON.parse(localStorage.getItem("cart"));
    data.products.forEach((el) => {
      if (arr.includes(el.id)) {
        basket.push(el);
      }
    });
  }
  console.log(basket)
}