// import { IProducts } from "../item/item";
import { basketElements } from "./showElement";

export function createBasket() {
  const basket = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
  ];

  // const main = document.querySelector(".main") as HTMLDivElement;
  // const filter = document.getElementById("filter_container") as HTMLDivElement;
  // const products = document.getElementById(
  //   "products_container"
  // ) as HTMLDivElement;
  // main.removeChild(filter);
  // main.removeChild(products);

  const cartWrapper = document.createElement("div");
  const productsCart = document.createElement("div");
  const titlePageControle = document.createElement("div");
  const titlePageControleText = document.createElement("h2");
  const prodItems = document.createElement("div");
  const totalCart = document.createElement("div");
  const totalCartText = document.createElement("h2");
  const totalElements = document.createElement("div");
  const totalPrices = document.createElement("div");
  const promoCode = document.createElement("div");
  const promoCodeInput = document.createElement("input");
  const promoText = document.createElement("span");

  // main.appendChild(cartWrapper);
  cartWrapper.appendChild(productsCart);
  productsCart.appendChild(titlePageControle);
  titlePageControle.appendChild(titlePageControleText);
  productsCart.appendChild(prodItems);
  cartWrapper.appendChild(totalCart);
  totalCart.appendChild(totalCartText);
  totalCart.appendChild(totalElements);
  totalCart.appendChild(totalPrices);
  totalCart.appendChild(promoCode);
  promoCode.appendChild(promoCodeInput);
  totalCart.appendChild(promoText);

  cartWrapper.classList.add("cart-wrapper");
  productsCart.classList.add("products-cart");
  titlePageControle.classList.add("title-page-controle");
  titlePageControleText.classList.add("title-page-controle-text");
  prodItems.classList.add("prod-items");
  totalCart.classList.add("total-cart");
  totalCartText.classList.add("total-cart-text");
  totalElements.classList.add("total-elements");
  totalPrices.classList.add("total-elements");
  promoCode.classList.add("promo-code");
  promoCodeInput.classList.add("promo-code-input");
  promoText.classList.add("promo-text");

  titlePageControleText.innerText = "Products In Cart";
  totalCartText.innerText = "Summary";
  totalElements.innerHTML = "Products:";
  totalPrices.innerHTML = "Total:";

  promoCodeInput.setAttribute("type", "search");
  promoCodeInput.placeholder = "Enter promo code";
  promoText.innerText = "Promo for test: 'RS', 'EPM'";

  // Для создания элемента со спаном отрисовывает внутри текста,
  //  const categoryElement = document.createElement("p");
  // const categoryElementSpan = document.createElement("span");
  // categoryElement.append(categoryElementSpan);
  // categoryElementSpan.classList.add("infoes-element");
  // categoryElementSpan.innerText = category;
  // categoryElement.innerHTML = categoryElement.innerText =
  //   `Category: ` + categoryElementSpan.outerHTML;

  let index = 1;
  for (let i = 0; i < basket.length; i++) {
    const Element = basket[i];
    prodItems.appendChild(basketElements(Element, index));
    index++;
  }

  return cartWrapper;
}
