import { cartStorage } from "./saveCart";

export function checkBtnAddCart() {
  const allBtns = document.querySelectorAll(".add-cart");
  allBtns.forEach((el) => {
    if (el.closest(".block-element")) {
      const id = el.closest(".block-element")!.getAttribute("id");
      cartStorage.forEach((item) => {
        if (item.id === +id!) {
          el.textContent = "DROP FROM CART";
        }
      });
    }
  });
}
