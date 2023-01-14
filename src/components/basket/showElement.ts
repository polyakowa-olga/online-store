// import { IProducts } from "../item/item";
import { openElement } from "../item/openItem";
import { PageId } from ".././app"; // olga
import data = require("../../assets/data.json");
import { getCartSum } from "./showDataInHeader";
import { basket } from "./basket";

export function basketElements(
  id: number,
  index: number,
  count: number,
  price: number
) {
  const cartBlock = document.createElement("div");
  for (let i = 0; i < data.products.length; i++) {
    if (data.products[i].id === id) {
      const product = data.products[i];

      const cartItem = document.createElement("div");
      const itemNumber = document.createElement("div");
      const itemInfo = document.createElement("div");
      const itemInfoA = document.createElement("a");

      const itemImg = document.createElement("img");
      const itemDetail = document.createElement("div");
      const productTitle = document.createElement("div");
      const productTitleText = document.createElement("h3");
      const productDescriptions = document.createElement("div");
      const productOther = document.createElement("div");
      const productRating = document.createElement("div");
      const productDiscount = document.createElement("div");
      const numberControl = document.createElement("div");
      const stockControl = document.createElement("div");
      const incDecControl = document.createElement("div");
      const buttonPlusControl = document.createElement("div");
      const buttonMinusControl = document.createElement("div");
      const quantityControl = document.createElement("h4");
      const amountControl = document.createElement("div");

      cartBlock.appendChild(cartItem);
      cartItem.appendChild(itemNumber);
      cartItem.appendChild(itemInfo);
      itemInfo.appendChild(itemInfoA);
      itemInfoA.appendChild(itemImg);
      itemInfoA.appendChild(itemDetail);
      itemDetail.appendChild(productTitle);
      productTitle.appendChild(productTitleText);
      itemDetail.appendChild(productDescriptions);
      itemDetail.appendChild(productOther);
      productOther.appendChild(productRating);
      productOther.appendChild(productDiscount);
      cartItem.appendChild(numberControl);
      numberControl.appendChild(stockControl);
      numberControl.appendChild(incDecControl);
      incDecControl.appendChild(buttonPlusControl);
      incDecControl.appendChild(quantityControl);
      incDecControl.appendChild(buttonMinusControl);
      numberControl.appendChild(amountControl);

      cartBlock.classList.add("cart-block");
      cartItem.classList.add("cart-item");
      itemNumber.classList.add("item-number");
      itemInfoA.classList.add("item-info");
      itemImg.classList.add("item-img");
      itemDetail.classList.add("item-detail");
      productTitle.classList.add("product-title");
      productDescriptions.classList.add("product-descriptions");
      productOther.classList.add("product-other");
      numberControl.classList.add("number-control");
      stockControl.classList.add("stock-control");
      incDecControl.classList.add("inc-dec-control");
      buttonPlusControl.classList.add("button-plus-control");
      buttonMinusControl.classList.add("button-minus-control");
      amountControl.classList.add("amount-control");

      itemNumber.innerHTML = `${index}`;
      itemImg.src = `${product.thumbnail}`;
      productTitleText.innerText = `${product.title}`;
      productDescriptions.innerHTML = `${product.description}`;
      productRating.innerHTML = `Rating: ${product.rating}`;
      productDiscount.innerHTML = `Discount: ${product.discountPercentage}%`;
      stockControl.innerText = `Stock: ${product.stock}`;
      amountControl.innerText = `€${product.price}`;
      buttonPlusControl.innerHTML = `+`;
      buttonMinusControl.innerHTML = `-`;
      itemInfoA.href = `#${PageId.ItemPage}/${product.id}`;

      itemInfo.addEventListener("click", () => {
        openElement(product);
      });

      // number of elements
      let numberOfProduct = count || 1;
      quantityControl.id = "quantity-control";
      quantityControl.innerText = `${numberOfProduct}`;
      let numberOfProducts = basket.length;
      let PriceOfProducts = getCartSum();

      const numBox = document.getElementById("num_box") as HTMLSpanElement;
      numBox.innerHTML = `${numberOfProducts}`;
      const sumBoxSpan = document.getElementById(
        "sum_box_span"
      ) as HTMLSpanElement;
      sumBoxSpan.innerText = `€${PriceOfProducts}`;

      buttonPlusControl.addEventListener("click", () => {
        const sumBoxSpan = document.getElementById(
          "sum_box_span"
        ) as HTMLSpanElement;

        const showNumberProducts = document.getElementById(
          "total_Elements_Span"
        ) as HTMLSpanElement;
        numberOfProducts = Number(showNumberProducts.textContent);

        const showPriceProducts = document.getElementById(
          "total_Prices_Span"
        ) as HTMLSpanElement;
        PriceOfProducts = Number(showPriceProducts.textContent);
        // numberOfBox = Number(numBox.textContent);

        if (numberOfProduct === product.stock) {
          numberOfProduct = product.stock;
        } else {
          numberOfProduct += 1;
          numberOfProducts += 1;
          // numberOfBox = numberOfProducts;
          // basket.push(Element);
          PriceOfProducts += product.price;
        }
        quantityControl.innerText = `${numberOfProduct}`;
        showNumberProducts.innerHTML = `${numberOfProducts}`;
        numBox.innerHTML = `${numberOfProducts}`;
        showPriceProducts.innerText = `${PriceOfProducts}`;
        sumBoxSpan.innerHTML = `€${PriceOfProducts}`;
      });

      buttonMinusControl.addEventListener("click", () => {
        const sumBoxSpan = document.getElementById(
          "sum_box_span"
        ) as HTMLSpanElement;

        const showNumberProducts = document.getElementById(
          "total_Elements_Span"
        ) as HTMLSpanElement;
        numberOfProducts = Number(showNumberProducts.textContent);

        const showPriceProducts = document.getElementById(
          "total_Prices_Span"
        ) as HTMLSpanElement;
        PriceOfProducts = Number(showPriceProducts.textContent);

        if (numberOfProduct < 2) {
          for (let i = 0; i < basket.length; i++) {
            if (basket[i] === product) {
              basket.splice(i, 1);
              numberOfProducts -= 1;
              PriceOfProducts -= product.price;
              const cartBlockDelete = cartBlock.parentNode as HTMLDivElement;
              cartBlockDelete.removeChild(cartBlock);
            }
          }
          showNumberProducts.innerHTML = `${numberOfProducts}`;
          numBox.innerHTML = `${numberOfProducts}`;
          showPriceProducts.innerText = `${PriceOfProducts}`;
          sumBoxSpan.innerHTML = `€${PriceOfProducts}`;
          numberOfProducts = basket.length;

          return;
        } else {
          numberOfProduct -= 1;
          numberOfProducts -= 1;
          PriceOfProducts -= product.price;
          showNumberProducts.innerHTML = `${numberOfProducts}`;
          numBox.innerHTML = `${numberOfProducts}`;
          showPriceProducts.innerText = `${PriceOfProducts}`;
          sumBoxSpan.innerHTML = `€${PriceOfProducts}`;

          // basket.pop(Element);
        }
        quantityControl.innerText = `${numberOfProduct}`;
      });
    }
  }
  console.log(price);
  return cartBlock;
}
