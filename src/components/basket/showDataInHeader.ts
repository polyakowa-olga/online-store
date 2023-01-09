import { basket } from "./basket";

export function getCartSum() {
  const sumBoxP = document.querySelector(".header__sum-box") as HTMLSpanElement;
  const sumBoxSpan = document.createElement("span");
  if (!sumBoxP)
    throw new Error("Error! Element with class '.header__sum-box' not found");

  let num = 0;
  basket.forEach((el) => {
    num += el.price;
  });
  // sumBoxSpan.textContent = `Cart total: €${num}`;
  sumBoxP.append(sumBoxSpan);
  sumBoxSpan.id = "sum_box_span";
  sumBoxSpan.innerText = `€${num}`;
  sumBoxP.innerHTML = sumBoxP.innerText = `Total:` + sumBoxSpan.outerHTML;
  return num;
}

export function getCartAmount() {
  const numBox = document.querySelector(".basket__item-amount");

  if (!numBox)
    throw new Error(
      "Error! Element with class '.basket__item-amount' not found"
    );

  const num: number = basket.length;
  numBox.id = "num_box";
  numBox.textContent = `${num}`;
}

export function showDataInHeader() {
  getCartSum();
  getCartAmount();
}
