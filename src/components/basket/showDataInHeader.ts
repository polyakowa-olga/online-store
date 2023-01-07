import { basket } from "./basket";

export function getCartSum() {
  if (basket.length) {
    const sumBox = document.querySelector(".header__sum-box");

    if (!sumBox)
      throw new Error("Error! Element with class '.header__sum-box' not found");

    let num = 0;
    basket.forEach((el) => {
      num += el.price;
    });
    sumBox.textContent = `Cart total: $${num}`;
  }
}

export function getCartAmount() {
  if (basket.length) {
    const numBox = document.querySelector(".basket__item-amount");

    if (!numBox)
      throw new Error(
        "Error! Element with class '.basket__item-amount' not found"
      );

    const num: number = basket.length;
    numBox.textContent = `${num}`;
  }
}

export function showDataInHeader() {
  getCartSum();
  getCartAmount();
}
