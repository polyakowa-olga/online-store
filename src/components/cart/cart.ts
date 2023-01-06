export function showCart() {
  const sumBox = document.createElement("div");
  sumBox.classList.add("header__sum-box");
  sumBox.textContent = "CART PAGE";
  sumBox.style.fontSize = "40px";
  sumBox.style.width = "100%";
  return sumBox;
}
