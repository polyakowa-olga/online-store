import { IProducts } from "../item/item";
import { basket } from "./basket";
import { cartStorage } from "./saveCart";
import { saveCart } from "./saveCart";

export function addProduct(Element: IProducts) {
  for (let i = 0; i <= basket.length; i++) {
    if (basket.length === 0) {
      basket.push(Element);
      cartStorage.push({ id: Element.id, count: 1 }); // olga
      saveCart(); // olga
      console.log(cartStorage);
    }
    if (basket[i].title === Element.title) {
      return;
    } else if (i === basket.length - 1) {
      basket.push(Element);
      console.log(basket);
    }
  }
}

export function deleteProduct(Element: IProducts) {
  for (let i = 0; i < basket.length; i++) {
    if (basket[i].title === Element.title) {
      basket.splice(i, 1);
      console.log(basket);
    }
  }
}
