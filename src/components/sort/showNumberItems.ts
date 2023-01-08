export function showNumberItems() {
  const productItems = document.querySelectorAll(".block-element");
  const amountProducts = document.querySelector(".amount-products");
  let num = 0;
  productItems.forEach((el) => {
    if (!el.classList.contains("hide")) num += 1;
  });
  if (amountProducts) {
    amountProducts.textContent = `${num}`;
  }
}
