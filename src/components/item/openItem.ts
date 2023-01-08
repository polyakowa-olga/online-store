import { IProducts } from "./item";

export function openElement(element: IProducts) {
  // const main = document.querySelector(".main") as HTMLDivElement;
  // const filter = document.getElementById("filter_container") as HTMLDivElement;
  // const products = document.getElementById(
  //   "products_container"
  // ) as HTMLDivElement;
  // main.removeChild(filter);
  // main.removeChild(products);
  const detailsBlock = document.createElement("div");
  const linkNavigation = document.createElement("div");
  const productDetail = document.createElement("div");
  const productTitle = document.createElement("div");
  const productData = document.createElement("div");
  const productTitleH1 = document.createElement("h1");
  const productPhotos = document.createElement("div");
  const productSlides = document.createElement("div");
  const productGrandPhoto = document.createElement("div");
  const productInfo = document.createElement("div");
  const productAddCard = document.createElement("div");
  const cartButtons = document.createElement("div");

  const productGrandPhotoImg = document.createElement("img");

  const linkStore = document.createElement("a");
  const linkCategory = document.createElement("a");
  const linkBrand = document.createElement("a");
  const linkTitle = document.createElement("a");

  const cartPrice = document.createElement("h2");
  const cartButtonAdd = document.createElement("button");
  const cartButtonBuy = document.createElement("button");

  // main.appendChild(detailsBlock);
  detailsBlock.appendChild(linkNavigation);
  detailsBlock.appendChild(productDetail);
  linkNavigation.appendChild(linkStore);
  linkNavigation.appendChild(linkCategory);
  linkNavigation.appendChild(linkBrand);
  linkNavigation.appendChild(linkTitle);
  productDetail.appendChild(productTitle);
  productTitle.appendChild(productTitleH1);
  productDetail.appendChild(productData);
  productData.appendChild(productPhotos);
  productPhotos.appendChild(productSlides);
  productPhotos.appendChild(productGrandPhoto);
  productGrandPhoto.appendChild(productGrandPhotoImg);
  productData.appendChild(productInfo);
  productData.appendChild(productAddCard);
  productAddCard.appendChild(cartButtons);
  cartButtons.appendChild(cartPrice);
  cartButtons.appendChild(cartButtonAdd);
  cartButtons.appendChild(cartButtonBuy);

  element.images.forEach((e) => {
    const slideImg = document.createElement("img");
    productSlides.appendChild(slideImg);
    slideImg.classList.add("slide-img");
    slideImg.src = e;
    slideImg.addEventListener("click", () => {
      const openImg = document.querySelector(
        ".product-grand-photo-img"
      ) as HTMLImageElement;
      openImg.src = slideImg.src;
    });
  });

  const myObject = {
    Description: `${element.description}`,
    DiscountPercentage: `${element.discountPercentage}`,
    Rating: `${element.rating}`,
    Stock: `${element.stock}`,
    Brand: `${element.brand}`,
    category: `${element.category}`,
  };

  for (const key in myObject) {
    const value = myObject[key as keyof typeof myObject];
    const detailItem = document.createElement("div");
    productInfo.appendChild(detailItem);
    const detailItemH3 = document.createElement("h3");
    const detailItemText = document.createElement("p");
    detailItem.classList.add("detail-element");
    detailItem.appendChild(detailItemH3);
    detailItem.appendChild(detailItemText);
    detailItemH3.classList.add("detail-iItem-h3");
    detailItemText.classList.add("detail-item-text");
    detailItemH3.innerHTML = `${key}`;
    detailItemText.innerHTML = `${value}`;
    if (key.length > 15) {
      const longKey = /[a-z](?=[A-Z])/g[Symbol.split](key).join(" ");
      detailItemH3.innerHTML = `${longKey}`;
    }
  }

  detailsBlock.classList.add("details-blocks");
  linkNavigation.classList.add("link-navigation");
  productDetail.classList.add("detail-product");
  productTitle.classList.add("product-title");
  productData.classList.add("product-data");
  productPhotos.classList.add("product-photos");
  productSlides.classList.add("product-slides");
  productGrandPhoto.classList.add("product-grand-photo");
  productGrandPhotoImg.classList.add("product-grand-photo-img");

  productInfo.classList.add("product-info");
  productAddCard.classList.add("add-to-card");
  cartButtons.classList.add("cart-buttons");
  cartButtonAdd.classList.add("cart-button");
  cartButtonBuy.classList.add("cart-button");

  productGrandPhotoImg.src = `${element.thumbnail}`;
  cartButtonAdd.innerHTML = "Add to cart";
  cartButtonBuy.innerHTML = "Buy NOW";
  cartPrice.innerHTML = `€${element.price}`;
  productTitleH1.innerText = `${element.title}`;
  linkStore.href = "#main-page";
  linkStore.innerText = "Store";
  linkCategory.innerText = `${element.category}`;
  linkBrand.innerText = `${element.brand}`;
  linkTitle.innerText = `${element.title}`;
  console.log(element);
  return detailsBlock;
}
