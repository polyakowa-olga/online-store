import { PageId } from "./app";

function renderLogo() {
  const logoBox = document.createElement("a");
  logoBox.classList.add("header__logo");
  logoBox.href = `#${PageId.MainPage}`;

  const logoImg = document.createElement("img");
  logoImg.classList.add("logo__img");
  logoImg.src = "./images/novogodnjaja-jolka.png";
  logoImg.setAttribute("alt", "logo-img");
  logoImg.setAttribute("width", "100");
  logoBox.append(logoImg);

  const logoText = document.createElement("span");
  logoText.classList.add("logo__text");
  logoText.textContent = "Online Store";
  logoBox.append(logoText);

  return logoBox;
}

function renderSumBox() {
  const sumBox = document.createElement("span");
  sumBox.classList.add("header__sum-box");
  sumBox.textContent = "Cart total: $0";
  return sumBox;
}

function renderCart() {
  const cartBox = document.createElement("a");
  cartBox.classList.add("header__basket");
  cartBox.href = `#${PageId.CartPage}`;

  const cartImg = document.createElement("img");
  cartImg.src = "./images/cart.png";
  cartImg.setAttribute("alt", "basket-img");
  cartImg.setAttribute("width", "100");
  cartBox.append(cartImg);

  const cartText = document.createElement("span");
  cartText.classList.add("basket__item-amount");
  cartText.textContent = "0";
  cartBox.append(cartText);

  return cartBox;
}

export function renderHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.append(renderLogo());
  header.append(renderSumBox());
  header.append(renderCart());
  const mainContainer = document.querySelector(".container");
  mainContainer?.prepend(header);
}
