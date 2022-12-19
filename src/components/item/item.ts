import data = require("../../assets/data.json");

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

console.log(data.products[0]);
export function component(
  name: string,
  path: string,
  category: string,
  price: number,
  discount: number,
  rating: number,
  stock: number
) {
  const blockElement = document.createElement("div");
  const imgElement = document.createElement("img");

  const nameElement = document.createElement("h1");
  const categoryElement = document.createElement("p");
  const brandElement = document.createElement("p");
  const priceElement = document.createElement("p");
  const discountElement = document.createElement("p");
  const ratingElement = document.createElement("p");
  const stockElement = document.createElement("p");

  imgElement.src = path;

  blockElement.append(nameElement);
  blockElement.append(imgElement);
  blockElement.append(categoryElement);
  blockElement.append(brandElement);
  blockElement.append(discountElement);
  blockElement.append(ratingElement);
  blockElement.append(stockElement);

  nameElement.innerText = name;
  categoryElement.innerText = `Category: ${category}`;
  brandElement.innerText = `Brand: ${category}`;
  priceElement.innerText = `Price: €${price}`;
  discountElement.innerText = `discount: ${discount}%`;
  ratingElement.innerText = `Rating: ${rating}`;
  stockElement.innerText = `Rating: ${stock}`;

  return blockElement;
}

// console.log(data.products[0]);
for (let i = 0; i < data.products.length; i++) {
  const Element = data.products[i];
  const name = Element.title;
  const path = Element.thumbnail;
  const category = Element.category;
  const price = Element.price;
  const discount = Element.discountPercentage;
  const rating = Element.rating;
  const stock = Element.stock;
  document.body.appendChild(
    component(name, path, category, price, discount, rating, stock)
  );
}
