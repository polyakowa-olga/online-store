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

export function component(
  name: string,
  path: string,
  brand: string,
  category: string,
  price: number,
  discount: number,
  rating: number,
  stock: number
) {
  const blockElement = document.createElement("div");
  const productItem = document.createElement("div");
  const itemText = document.createElement("div");
  const imgElement = document.createElement("img");

  const nameElement = document.createElement("h1");
  const infoElement = document.createElement("div");
  const categoryElement = document.createElement("p");
  const brandElement = document.createElement("p");
  const priceElement = document.createElement("p");
  const discountElement = document.createElement("p");
  const ratingElement = document.createElement("p");
  const stockElement = document.createElement("p");

  const buttonsElement = document.createElement("div");
  const buttonAddCard = document.createElement("button");
  const buttondetailsCard = document.createElement("button");

  blockElement.append(productItem);
  productItem.append(itemText);
  productItem.append(imgElement);
  productItem.append(buttonsElement);
  buttonsElement.append(buttonAddCard);
  buttonsElement.append(buttondetailsCard);
  itemText.append(nameElement);
  itemText.append(infoElement);

  infoElement.append(categoryElement);
  infoElement.append(brandElement);
  infoElement.append(discountElement);
  infoElement.append(ratingElement);
  infoElement.append(stockElement);

  blockElement.classList.add("block-element");
  productItem.classList.add("product-item");
  imgElement.classList.add("img-element");
  nameElement.classList.add("name-element");
  infoElement.classList.add("info-element");
  itemText.classList.add("item-text");
  buttonsElement.classList.add("buttons-element");

  nameElement.innerText = name;
  imgElement.src = path;
  categoryElement.innerText = `Category: ${category}`;
  brandElement.innerText = `Brand: ${brand}`;
  priceElement.innerText = `Price: €${price}`;
  discountElement.innerText = `discount: ${discount}%`;
  ratingElement.innerText = `Rating: ${rating}`;
  stockElement.innerText = `Rating: ${stock}`;
  buttonAddCard.innerText = "ADD TO CART";
  buttondetailsCard.innerText = "DETAILS";

  return blockElement;
}
