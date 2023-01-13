import { openElement } from "../item/openItem";
import { PageId } from ".././app"; // olga
import { addProduct } from "../basket/addproduct";
import { deleteProduct } from "../basket/addproduct";
import { basket } from "../basket/basket";
import { showDataInHeader } from "../basket/showDataInHeader";

export interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export function component(Element: IProducts) {
  const {
    id,
    title: name,
    thumbnail: path,
    brand,
    category,
    price,
    discountPercentage: discount,
    rating,
    stock,
  } = Element; // olga

  // const id = Element.id;
  // const name = Element.title;
  // const path = Element.thumbnail;
  // const brand = Element.brand;
  // const category = Element.category;
  // const price = Element.price;
  // const discount = Element.discountPercentage;
  // const rating = Element.rating;
  // const stock = Element.stock;

  const blockElement = document.createElement("div");
  const productItem = document.createElement("div");
  const itemText = document.createElement("div");
  const imgElement = document.createElement("img");

  const nameElement = document.createElement("h1");
  const infoElement = document.createElement("div");
  const categoryElement = document.createElement("p");
  const categoryElementSpan = document.createElement("span");
  const brandElement = document.createElement("p");
  const brandElementSpan = document.createElement("span");
  const priceElement = document.createElement("p");
  const priceElementSpan = document.createElement("span");
  const discountElement = document.createElement("p");
  const discountElementSpan = document.createElement("span");
  const ratingElement = document.createElement("p");
  const ratingElementSpan = document.createElement("span");
  const stockElement = document.createElement("p");
  const stockElementSpan = document.createElement("span");

  const buttonsElement = document.createElement("div");
  const buttonAddCard = document.createElement("button");
  // const buttondetailsCard = document.createElement("button");
  const buttondetailsCard = document.createElement("a"); // olga

  blockElement.append(productItem);
  productItem.append(itemText);
  productItem.append(imgElement);
  productItem.append(buttonsElement);
  buttonsElement.append(buttonAddCard);
  buttonsElement.append(buttondetailsCard);

  itemText.append(nameElement);
  itemText.append(infoElement);

  infoElement.append(categoryElement);

  categoryElement.append(categoryElementSpan);
  infoElement.append(brandElement);
  brandElement.append(brandElementSpan);
  infoElement.append(priceElement);
  priceElement.append(priceElementSpan);
  infoElement.append(discountElement);
  discountElement.append(discountElementSpan);
  infoElement.append(ratingElement);
  ratingElement.append(ratingElementSpan);
  infoElement.append(stockElement);
  stockElement.append(stockElementSpan);

  blockElement.classList.add("block-element");
  productItem.classList.add("product-item");
  imgElement.classList.add("img-element");
  nameElement.classList.add("name-element");
  infoElement.classList.add("info-element");
  itemText.classList.add("item-text");
  buttonsElement.classList.add("buttons-element");

  categoryElementSpan.classList.add("infoes-element");

  brandElementSpan.classList.add("infoes-element");
  priceElementSpan.classList.add("infoes-element");
  discountElementSpan.classList.add("infoes-element");
  ratingElementSpan.classList.add("infoes-element");
  stockElementSpan.classList.add("infoes-element");

  blockElement.setAttribute("id", `${id}`);
  nameElement.innerText = name;
  imgElement.src = path;
  categoryElementSpan.innerText = category;
  categoryElement.innerHTML = categoryElement.innerText =
    `Category: ` + categoryElementSpan.outerHTML;
  brandElementSpan.innerText = brand;
  brandElement.innerHTML = brandElement.innerText =
    `Brand: ` + brandElementSpan.outerHTML;
  priceElementSpan.innerText = `€${price}`;
  priceElement.innerHTML = priceElement.innerText =
    `Price: ` + priceElementSpan.outerHTML;
  discountElement.innerText = `discount: ${discount}%`;
  discountElementSpan.innerText = `${discount}%`;
  discountElement.innerHTML = discountElement.innerText =
    `discount: ` + discountElementSpan.outerHTML;
  ratingElementSpan.innerText = `${rating}`;
  ratingElement.innerHTML = ratingElement.innerText =
    `Rating: ` + ratingElementSpan.outerHTML;
  stockElement.innerText = `Rating: `;
  stockElementSpan.innerText = `${stock}`;
  stockElement.innerHTML = stockElement.innerText =
    `Stock: ` + stockElementSpan.outerHTML;

  buttonAddCard.innerText = "ADD TO CART";
  buttonAddCard.classList.add("add-cart");
  buttondetailsCard.innerText = "DETAILS";
  buttondetailsCard.classList.add("open");
  buttondetailsCard.href = `#${PageId.ItemPage}/${id}`; // olga

  buttondetailsCard.addEventListener("click", () => {
    openElement(Element);
  });
  buttonAddCard.addEventListener("click", () => {
    if (buttonAddCard.classList.contains("drop-from-cart")) {
      buttonAddCard.classList.remove("drop-from-cart");
      buttonAddCard.classList.add("add-cart");
      buttonAddCard.innerText = "ADD TO CART";
      deleteProduct(Element);
    } else {
      addProduct(Element);
      buttonAddCard.classList.remove("add-cart");
      buttonAddCard.classList.add("drop-from-cart");
      buttonAddCard.innerText = "DROP FROM CART";
    }
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].title === Element.title) {
        buttonAddCard.classList.add("drop-from-cart");
        buttonAddCard.innerText = "DROP FROM CART";
      }
    }
    showDataInHeader();
  });

  for (let i = 0; i < basket.length; i++) {
    if (basket[i].title === Element.title) {
      buttonAddCard.innerText = "DROP FROM CART";
      buttonAddCard.classList.add("drop-from-cart");
    }
  }
  return blockElement;
}
export { openElement };
