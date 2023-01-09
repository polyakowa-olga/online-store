import { basket } from "./basket";
import { getCart } from "../basket/saveCart";

export function getCartSum() {
  const sumBox = document.querySelector(".header__sum-box");

  if (!sumBox)
    throw new Error("Error! Element with class '.header__sum-box' not found");

  let sum = 0;
  basket.forEach((el) => {
    sum += el.price;
  });
  sumBox.textContent = `Cart total: €${sum}`;
}

export function getCartAmount() {
  const numBox = document.querySelector(".basket__item-amount");

  if (!numBox)
    throw new Error(
      "Error! Element with class '.basket__item-amount' not found"
    );

  const num: number = basket.length;
  numBox.textContent = `${num}`;
  console.log(basket.length);
}

export function showDataInHeader() {
  getCart();
  getCartSum();
  getCartAmount();
}
