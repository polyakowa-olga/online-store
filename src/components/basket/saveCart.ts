import { basket } from "./basket";
import data = require("../../assets/data.json");

interface ICartStorage {
  id: number;
  count: number;
}

export let cartStorage: ICartStorage[] = [];

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cartStorage));
}

export function getCart() {
  if (localStorage.getItem("cart")) {
    cartStorage = JSON.parse(localStorage.getItem("cart"));
  }
  console.log(cartStorage);
  basket.length = 0;
  data.products.forEach((el) => {
    cartStorage.forEach((item) => {
      if (item.id === el.id) {
        basket.push(el);
      }
    });
  });
  console.log(basket);
}
