/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 77:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.knowHashchange = exports.renderNewPage = void 0;
const data_json_1 = __importDefault(__webpack_require__(914));
const index_1 = __webpack_require__(104);
const products_1 = __webpack_require__(505);
const error_1 = __webpack_require__(807);
// import { showCart } from "./cart/cart";
const item_1 = __webpack_require__(872);
const basket_1 = __webpack_require__(62);
const chooseParamsObj_1 = __webpack_require__(305);
function renderNewPage(idPage, i) {
    const mainSection = document.querySelector(".main");
    if (mainSection) {
        if (idPage === "main-page" /* PageId.MainPage */) {
            mainSection.innerHTML = "";
            mainSection.setAttribute("id", `${idPage}`);
            const filterBox = document.createElement("div");
            filterBox.classList.add("filter-container");
            filterBox.setAttribute("id", "filter_container");
            mainSection.append(filterBox);
            (0, index_1.createFilterSection)(data_json_1.default.products);
            const productsBox = document.createElement("div");
            productsBox.classList.add("products-container");
            productsBox.setAttribute("id", "products_container");
            mainSection.append(productsBox);
            (0, products_1.showProducts)();
            (0, chooseParamsObj_1.getParamsObj)();
        }
        else if (idPage === `${"item-page" /* PageId.ItemPage */}`) {
            // document.location.search = "";
            mainSection.innerHTML = "";
            mainSection.setAttribute("id", `${idPage} `);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            mainSection.append((0, item_1.openElement)(data_json_1.default.products[i])); // сюда нужно передать объект для отрисовки
        }
        else if (idPage === "cart-page" /* PageId.CartPage */) {
            // document.location.search = "";
            mainSection.innerHTML = "";
            mainSection.setAttribute("id", `${idPage} `);
            mainSection.append((0, basket_1.createBasket)());
        }
        else {
            // document.location.search = "";
            mainSection.innerHTML = "";
            mainSection.setAttribute("id", "error-page");
            mainSection.append((0, error_1.showError)());
        }
    }
}
exports.renderNewPage = renderNewPage;
function knowHashchange() {
    window.addEventListener("hashchange", () => {
        const hash = window.location.hash.slice(1).split("/");
        if (hash.length === 1) {
            return renderNewPage(hash[0]);
        }
        else {
            const i = Number(hash[1]) - 1;
            renderNewPage(hash[0], i);
        }
        // renderNewPage(hash);
    });
}
exports.knowHashchange = knowHashchange;


/***/ }),

/***/ 544:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteProduct = exports.addProduct = void 0;
const basket_1 = __webpack_require__(62);
function addProduct(Element) {
    for (let i = 0; i <= basket_1.basket.length; i++) {
        if (basket_1.basket.length === 0) {
            basket_1.basket.push(Element);
        }
        if (basket_1.basket[i].title === Element.title) {
            return;
        }
        else if (i === basket_1.basket.length - 1) {
            basket_1.basket.push(Element);
            console.log(basket_1.basket);
        }
    }
}
exports.addProduct = addProduct;
function deleteProduct(Element) {
    for (let i = 0; i < basket_1.basket.length; i++) {
        if (basket_1.basket[i].title === Element.title) {
            basket_1.basket.splice(i, 1);
            console.log(basket_1.basket);
        }
    }
}
exports.deleteProduct = deleteProduct;


/***/ }),

/***/ 62:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createBasket = exports.basket = void 0;
const showElement_1 = __webpack_require__(779);
const showDataInHeader_1 = __webpack_require__(151);
exports.basket = [];
function createBasket() {
    // const main = document.querySelector(".main") as HTMLDivElement;
    // const filter = document.getElementById("filter_container") as HTMLDivElement;
    // const products = document.getElementById(
    //   "products_container"
    // ) as HTMLDivElement;
    // main.removeChild(filter);
    // main.removeChild(products);
    // const summerPrices: number = summerPrices(basket);
    const cartWrapper = document.createElement("div");
    const productsCart = document.createElement("div");
    const titlePageControle = document.createElement("div");
    const titlePageControleText = document.createElement("h2");
    const prodItems = document.createElement("div");
    const totalCart = document.createElement("div");
    const totalCartText = document.createElement("h2");
    const totalElements = document.createElement("div");
    const totalElementsP = document.createElement("p");
    const totalElementsSpan = document.createElement("span");
    const totalPrices = document.createElement("div");
    const totalPricesP = document.createElement("p");
    const totalPricesSpan = document.createElement("span");
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
    totalElements.appendChild(totalElementsP);
    totalElementsP.append(totalElementsSpan);
    totalCart.appendChild(totalPrices);
    totalPrices.appendChild(totalPricesP);
    totalPricesP.appendChild(totalPricesSpan);
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
    totalElementsSpan.id = "total_Elements_Span";
    totalElementsSpan.innerText = `${exports.basket.length}`;
    totalElementsP.innerHTML = totalElementsP.innerText =
        `Products:` + totalElementsSpan.outerHTML;
    totalPricesSpan.id = "total_Prices_Span";
    totalPricesSpan.innerText = `${(0, showDataInHeader_1.getCartSum)()}`;
    totalPricesP.innerHTML = totalPricesP.innerText =
        `Total: €` + totalPricesSpan.outerHTML;
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
    const quantityControl = document.getElementById("quantity-control");
    const addStock = Number(quantityControl === null || quantityControl === void 0 ? void 0 : quantityControl.textContent);
    for (let i = 0; i < exports.basket.length; i++) {
        const Element = exports.basket[i];
        prodItems.appendChild((0, showElement_1.basketElements)(Element, index, addStock));
        index++;
    }
    return cartWrapper;
}
exports.createBasket = createBasket;


/***/ }),

/***/ 57:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCart = exports.saveCart = exports.cartStorage = void 0;
const basket_1 = __webpack_require__(62);
const data = __webpack_require__(914);
exports.cartStorage = [];
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(exports.cartStorage));
}
exports.saveCart = saveCart;
function getCart() {
    if (localStorage.getItem("cart")) {
        exports.cartStorage = JSON.parse(localStorage.getItem("cart") || "");
    }
    basket_1.basket.length = 0;
    data.products.forEach((el) => {
        exports.cartStorage.forEach((item) => {
            if (item.id === el.id) {
                basket_1.basket.push(el);
            }
        });
    });
}
exports.getCart = getCart;


/***/ }),

/***/ 151:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showDataInHeader = exports.getCartAmount = exports.getCartSum = void 0;
const basket_1 = __webpack_require__(62);
function getCartSum() {
    const sumBoxP = document.querySelector(".header__sum-box");
    const sumBoxSpan = document.createElement("span");
    if (!sumBoxP)
        throw new Error("Error! Element with class '.header__sum-box' not found");
    let num = 0;
    basket_1.basket.forEach((el) => {
        num += el.price;
    });
    // sumBoxSpan.textContent = `Cart total: €${num}`;
    sumBoxP.append(sumBoxSpan);
    sumBoxSpan.id = "sum_box_span";
    sumBoxSpan.innerText = `€${num}`;
    sumBoxP.innerHTML = sumBoxP.innerText = `Total:` + sumBoxSpan.outerHTML;
    return num;
}
exports.getCartSum = getCartSum;
function getCartAmount() {
    const numBox = document.querySelector(".basket__item-amount");
    if (!numBox)
        throw new Error("Error! Element with class '.basket__item-amount' not found");
    const num = basket_1.basket.length;
    numBox.id = "num_box";
    numBox.textContent = `${num}`;
}
exports.getCartAmount = getCartAmount;
function showDataInHeader() {
    getCartSum();
    getCartAmount();
}
exports.showDataInHeader = showDataInHeader;


/***/ }),

/***/ 779:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.basketElements = void 0;
const openItem_1 = __webpack_require__(323);
const basket_1 = __webpack_require__(62);
const showDataInHeader_1 = __webpack_require__(151);
function basketElements(Element, index, addStock) {
    const cartBlock = document.createElement("div");
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
    itemImg.src = `${Element.thumbnail}`;
    productTitleText.innerText = `${Element.title}`;
    productDescriptions.innerHTML = `${Element.description}`;
    productRating.innerHTML = `Rating: ${Element.rating}`;
    productDiscount.innerHTML = `Discount: ${Element.discountPercentage}%`;
    stockControl.innerText = `Stock: ${Element.stock}`;
    amountControl.innerText = `€${Element.price}`;
    buttonPlusControl.innerHTML = `+`;
    buttonMinusControl.innerHTML = `-`;
    itemInfoA.href = `#${"item-page" /* PageId.ItemPage */}/${Element.id}`;
    itemInfo.addEventListener("click", () => {
        (0, openItem_1.openElement)(Element);
    });
    // number of elements
    let numberOfProduct = addStock || 1;
    quantityControl.id = "quantity-control";
    quantityControl.innerText = `${numberOfProduct}`;
    let numberOfProducts = basket_1.basket.length;
    let PriceOfProducts = (0, showDataInHeader_1.getCartSum)();
    const numBox = document.getElementById("num_box");
    numBox.innerHTML = `${numberOfProducts}`;
    const sumBoxSpan = document.getElementById("sum_box_span");
    sumBoxSpan.innerText = `€${PriceOfProducts}`;
    buttonPlusControl.addEventListener("click", () => {
        const sumBoxSpan = document.getElementById("sum_box_span");
        const showNumberProducts = document.getElementById("total_Elements_Span");
        numberOfProducts = Number(showNumberProducts.textContent);
        const showPriceProducts = document.getElementById("total_Prices_Span");
        PriceOfProducts = Number(showPriceProducts.textContent);
        // numberOfBox = Number(numBox.textContent);
        if (numberOfProduct === Element.stock) {
            numberOfProduct = Element.stock;
        }
        else {
            numberOfProduct += 1;
            numberOfProducts += 1;
            // numberOfBox = numberOfProducts;
            // basket.push(Element);
            PriceOfProducts += Element.price;
        }
        quantityControl.innerText = `${numberOfProduct}`;
        showNumberProducts.innerHTML = `${numberOfProducts}`;
        numBox.innerHTML = `${numberOfProducts}`;
        showPriceProducts.innerText = `${PriceOfProducts}`;
        sumBoxSpan.innerHTML = `€${PriceOfProducts}`;
    });
    buttonMinusControl.addEventListener("click", () => {
        const sumBoxSpan = document.getElementById("sum_box_span");
        const showNumberProducts = document.getElementById("total_Elements_Span");
        numberOfProducts = Number(showNumberProducts.textContent);
        const showPriceProducts = document.getElementById("total_Prices_Span");
        PriceOfProducts = Number(showPriceProducts.textContent);
        if (numberOfProduct < 2) {
            for (let i = 0; i < basket_1.basket.length; i++) {
                if (basket_1.basket[i] === Element) {
                    basket_1.basket.splice(i, 1);
                    numberOfProducts -= 1;
                    PriceOfProducts -= Element.price;
                    const cartBlockDelete = cartBlock.parentNode;
                    cartBlockDelete.removeChild(cartBlock);
                }
            }
            showNumberProducts.innerHTML = `${numberOfProducts}`;
            numBox.innerHTML = `${numberOfProducts}`;
            showPriceProducts.innerText = `${PriceOfProducts}`;
            sumBoxSpan.innerHTML = `€${PriceOfProducts}`;
            numberOfProducts = basket_1.basket.length;
            return;
        }
        else {
            numberOfProduct -= 1;
            numberOfProducts -= 1;
            PriceOfProducts -= Element.price;
            showNumberProducts.innerHTML = `${numberOfProducts}`;
            numBox.innerHTML = `${numberOfProducts}`;
            showPriceProducts.innerText = `${PriceOfProducts}`;
            sumBoxSpan.innerHTML = `€${PriceOfProducts}`;
            // basket.pop(Element);
        }
        quantityControl.innerText = `${numberOfProduct}`;
    });
    return cartBlock;
}
exports.basketElements = basketElements;


/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showError = void 0;
function showError() {
    const sumBox = document.createElement("span");
    sumBox.classList.add("header__sum-box");
    sumBox.textContent = "Errror. Page not found";
    sumBox.style.fontSize = "40px";
    sumBox.style.color = "red";
    sumBox.style.width = "100%";
    return sumBox;
}
exports.showError = showError;


/***/ }),

/***/ 521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.controllChanges = void 0;
const dualSlider_1 = __webpack_require__(973);
const showFilterItems_1 = __webpack_require__(519);
const reset_button_1 = __webpack_require__(220);
const copy_button_1 = __webpack_require__(154);
const queryString_1 = __webpack_require__(272);
const showNumberItems_1 = __webpack_require__(679);
const sortFoundItems_1 = __webpack_require__(925);
//import { toggleRepresentaionProducts } from ".././representationProducts.ts/toggleRepresentation";
const saveCart_1 = __webpack_require__(57);
const saveCart_2 = __webpack_require__(57);
function controllChanges() {
    const paramBox = document.querySelector(".filter-params");
    if (!paramBox)
        throw new Error('Error! Element with class "filter-params" not found!');
    paramBox.addEventListener("click", showFilterItems_1.showFilterItems);
    const resetBTN = document.querySelector(".reset");
    if (!resetBTN)
        throw new Error('Error! Element with class "reset" not found!');
    resetBTN.addEventListener("click", reset_button_1.resetFilters);
    const copyBTN = document.querySelector(".copy");
    if (!copyBTN)
        throw new Error('Error! Element with class "copy" not found!');
    copyBTN.addEventListener("click", copy_button_1.toggleFilters);
    window.addEventListener("DOMContentLoaded", () => {
        const optionBox = document.querySelector(".sort-bar-select");
        if (!optionBox)
            throw new Error('Error! Element with class "sort-bar-select" not found!');
        optionBox.addEventListener("click", sortFoundItems_1.addMethodSortToParamsObj);
        // const representaionProductsControllerBox =
        //   document.querySelector(".view-products");
        // if (!representaionProductsControllerBox)
        //   throw new Error('Error! Element with class "copy" not found!');
        // representaionProductsControllerBox.addEventListener(
        //   "click",
        //   toggleRepresentaionProducts
        // );
    });
    window.onload = dualSlider_1.checkValues;
    window.addEventListener("load", queryString_1.getDataFromQueryString);
    window.addEventListener("load", showNumberItems_1.showNumberItems);
    window.addEventListener("load", saveCart_2.getCart);
    window.addEventListener("unload", saveCart_1.saveCart);
}
exports.controllChanges = controllChanges;


/***/ }),

/***/ 659:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getInputValue = void 0;
function getInputValue(event, param, filterParams) {
    const ev = event.target;
    if (!ev.closest(".input-box"))
        return;
    const checkboxValues = [];
    const nam = ev.closest(".input-box");
    if (!nam || !nam.lastChild)
        throw new Error('Error! Element with class "filter-params" not found!');
    const content = nam.lastChild.textContent;
    if (param === "category" || param === "brand") {
        if (filterParams[param].includes(content)) {
            checkboxValues.push(content, "del");
            nam.childNodes.forEach((el) => {
                el.classList.remove("active");
            });
        }
        else {
            checkboxValues.push(content, "add");
            nam.childNodes.forEach((el) => {
                el.classList.add("active");
            });
        }
    }
    console.log(checkboxValues);
    return checkboxValues;
}
exports.getInputValue = getInputValue;


/***/ }),

/***/ 305:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getParamsObj = exports.sort = exports.chooseParamsObj = void 0;
const data = __webpack_require__(914);
const showFilterItems_1 = __webpack_require__(519);
const showNumberEachParam_1 = __webpack_require__(517);
exports.chooseParamsObj = {
    category: [],
    brand: [],
    price: [],
    stock: [],
};
function sort() {
    let result = [];
    if (exports.chooseParamsObj.category.length) {
        if (!result.length) {
            data.products.forEach((el) => {
                for (let i = 0; i < exports.chooseParamsObj.category.length; i++) {
                    if (el.category === exports.chooseParamsObj.category[i]) {
                        result.push(el);
                    }
                }
            });
        }
        else {
            const resultCategory = [];
            result.forEach((el) => {
                for (let i = 0; i < exports.chooseParamsObj.category.length; i++) {
                    if (exports.chooseParamsObj.category.includes(el.category) &&
                        !resultCategory.includes(el)) {
                        resultCategory.push(el);
                    }
                }
            });
            result = resultCategory.slice();
        }
    }
    if (exports.chooseParamsObj.brand.length) {
        if (!result.length) {
            data.products.forEach((el) => {
                for (let i = 0; i < exports.chooseParamsObj.brand.length; i++) {
                    if (el.brand === exports.chooseParamsObj.brand[i]) {
                        result.push(el);
                    }
                }
            });
        }
        else {
            const resultBrand = [];
            result.forEach((el) => {
                for (let i = 0; i < exports.chooseParamsObj.brand.length; i++) {
                    if (exports.chooseParamsObj.brand.includes(el.brand) &&
                        !resultBrand.includes(el)) {
                        resultBrand.push(el);
                    }
                }
            });
            result = resultBrand.slice();
        }
    }
    if (exports.chooseParamsObj.price.length) {
        const arr = result.length ? result : data.products;
        const resultPrice = [];
        arr.forEach((el) => {
            if (el.price <= exports.chooseParamsObj.price[1] &&
                el.price >= exports.chooseParamsObj.price[0]) {
                resultPrice.push(el);
            }
        });
        result = resultPrice.slice();
    }
    if (exports.chooseParamsObj.stock.length) {
        const arr = result.length ? result : data.products;
        const resultStock = [];
        arr.forEach((el) => {
            if (el.stock <= exports.chooseParamsObj.stock[1] &&
                el.stock >= exports.chooseParamsObj.stock[0]) {
                resultStock.push(el);
            }
        });
        result = resultStock.slice();
    }
    (0, showNumberEachParam_1.showNumberEachParam)(result);
    return result;
}
exports.sort = sort;
function getParamsObj() {
    const list = document.querySelectorAll(".input-box");
    list.forEach((el) => {
        if (el.closest("#fl-category")) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            if (exports.chooseParamsObj.category.includes(el.childNodes[1].textContent)) {
                el.childNodes.forEach((element) => {
                    element.classList.add("active");
                });
            }
        }
        if (el.closest("#fl-brand")) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            if (exports.chooseParamsObj.brand.includes(el.childNodes[1].textContent)) {
                el.childNodes.forEach((element) => {
                    element.classList.add("active");
                });
            }
        }
    });
    const input = document.querySelectorAll(".range-input");
    input.forEach((el) => {
        const slides = el.querySelectorAll("input");
        if (el.closest("#fl-price") && exports.chooseParamsObj.price.length) {
            slides[0].value = `${exports.chooseParamsObj.price[0]}`;
            slides[1].value = `${exports.chooseParamsObj.price[1]}`;
        }
        else if (el.closest("#fl-stock") && exports.chooseParamsObj.stock.length) {
            slides[0].value = `${exports.chooseParamsObj.stock[0]}`;
            slides[1].value = `${exports.chooseParamsObj.stock[1]}`;
        }
        else {
            slides[0].value = `${slides[0].getAttribute("min")}`;
            slides[1].value = `${slides[1].getAttribute("max")}`;
        }
        const displayElement = el.querySelectorAll(".values")[0];
        displayElement.innerHTML = `$${slides[0].value}   ⟷   $${slides[1].value}`;
    });
    (0, showFilterItems_1.show)();
}
exports.getParamsObj = getParamsObj;


/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnFilters = exports.copyFilters = exports.toggleFilters = void 0;
const chooseParamsObj_1 = __webpack_require__(305);
const queryString_1 = __webpack_require__(272);
function toggleFilters(event) {
    const ev = event.target;
    if (ev.classList.contains("save")) {
        returnFilters();
    }
    else {
        copyFilters(ev);
    }
}
exports.toggleFilters = toggleFilters;
function copyFilters(ev) {
    chooseParamsObj_1.chooseParamsObj.copy_link = document.location.search
        .substring(1)
        .replace(/=/g, "%3D")
        .replace(/&/g, "%26");
    console.log(chooseParamsObj_1.chooseParamsObj.copy_link);
    ev.classList.add("save");
    ev.textContent = "Return Filters";
    (0, queryString_1.updateQueryString)(chooseParamsObj_1.chooseParamsObj);
}
exports.copyFilters = copyFilters;
function returnFilters() {
    if (chooseParamsObj_1.chooseParamsObj.copy_link) {
        const temp = chooseParamsObj_1.chooseParamsObj.copy_link
            .replace(/%3D/g, "=")
            .replace(/%26/g, "&");
        delete chooseParamsObj_1.chooseParamsObj.copy_link;
        document.location.search = temp;
    }
}
exports.returnFilters = returnFilters;


/***/ }),

/***/ 40:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function drawBtnBox() {
    const btnBox = document.createElement("div");
    btnBox.classList.add("filter-btns");
    const btnReset = document.createElement("button");
    btnReset.classList.add("btn");
    btnReset.classList.add("filter-btn");
    btnReset.classList.add("reset");
    btnReset.textContent = "Reset Filters";
    btnBox.append(btnReset);
    const btnCopy = document.createElement("button");
    btnCopy.classList.add("btn");
    btnCopy.classList.add("filter-btn");
    btnCopy.classList.add("copy");
    btnCopy.textContent = "Copy Link";
    const url = new URL(window.location.href);
    if (url.searchParams.has("copy_link")) {
        btnCopy.classList.add("save");
        btnCopy.textContent = "Return Filters";
    }
    btnBox.append(btnCopy);
    return btnBox;
}
exports["default"] = drawBtnBox;


/***/ }),

/***/ 135:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function drawCheckboxFilter(filterBox, name, id, param, arr) {
    const category = document.createElement("div");
    category.classList.add("category");
    category.classList.add("_filter-box");
    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("filter-title");
    categoryTitle.textContent = `${name}`;
    category.append(categoryTitle);
    const categoryListWrapper = document.createElement("div");
    categoryListWrapper.classList.add("filter-list-wrapper");
    category.append(categoryListWrapper);
    const categoryList = document.createElement("div");
    categoryList.classList.add("filter-list");
    categoryList.id = `${id}`;
    categoryListWrapper.append(categoryList);
    filterBox.append(category);
    arr.forEach((el) => {
        const categoryListItem = document.createElement("div");
        categoryListItem.classList.add("filter-list__item");
        categoryList.append(categoryListItem);
        const categoryLabel = document.createElement("div");
        categoryLabel.classList.add("input-box");
        categoryListItem.append(categoryLabel);
        const maskInput = document.createElement("div");
        maskInput.classList.add("mark-input");
        categoryLabel.append(maskInput);
        const textInput = document.createElement("div");
        textInput.classList.add("text-input");
        textInput.textContent = `${el[0]}`;
        categoryLabel.append(textInput);
        const itemsAmount = document.createElement("span");
        itemsAmount.classList.add("items-amount");
        itemsAmount.textContent = `${el[1]}/${el[1]}`;
        categoryListItem.append(itemsAmount);
        categoryListItem.append(itemsAmount);
        categoryList.append(categoryListItem);
    });
}
exports["default"] = drawCheckboxFilter;


/***/ }),

/***/ 30:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFilterParam = void 0;
function getFilterParam(arr, param) {
    const result = [];
    const arrParams = [];
    arr.forEach((el) => {
        if (param === "category" || param === "brand") {
            arrParams.push(el[param]);
        }
    });
    const uniqParam = new Set(arrParams);
    uniqParam.forEach((el) => {
        let amount = 0;
        for (let i = 0; i < arr.length; i++) {
            if (param === "category" || param === "brand") {
                if (el === arr[i][param]) {
                    amount++;
                }
            }
        }
        result.push([el, amount]);
    });
    return result;
}
exports.getFilterParam = getFilterParam;


/***/ }),

/***/ 356:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.drawFilterSection = void 0;
const filterParam_1 = __webpack_require__(30);
const buttonBox_1 = __importDefault(__webpack_require__(40));
const checkboxSection_1 = __importDefault(__webpack_require__(135));
const rangeboxSection_1 = __importDefault(__webpack_require__(313));
function drawFilterSection(arr) {
    const mainBox = document.getElementById("filter_container");
    if (!mainBox)
        throw new Error('Error! Element with class "filter_container" not found!');
    mainBox.append((0, buttonBox_1.default)());
    const paramBox = document.createElement("div");
    paramBox.classList.add("filter-params");
    mainBox.append(paramBox);
    const arrCategory = (0, filterParam_1.getFilterParam)(arr, "category");
    (0, checkboxSection_1.default)(paramBox, "Category", "fl-category", "category", arrCategory);
    const arrBrand = (0, filterParam_1.getFilterParam)(arr, "brand");
    (0, checkboxSection_1.default)(paramBox, "Brand", "fl-brand", "brand", arrBrand);
    (0, rangeboxSection_1.default)(paramBox, "Price", "fl-price");
    (0, rangeboxSection_1.default)(paramBox, "Stock", "fl-stock");
}
exports.drawFilterSection = drawFilterSection;


/***/ }),

/***/ 313:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function drawRangeboxFilter(filterBox, name, id) {
    const category = document.createElement("div");
    category.classList.add("category");
    category.classList.add("_filter-box");
    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("filter-title");
    categoryTitle.textContent = `${name}`;
    category.append(categoryTitle);
    const categoryList = document.createElement("div");
    categoryList.classList.add("filter-list");
    category.append(categoryList);
    const inputsBox = document.createElement("div");
    inputsBox.classList.add("range-input");
    inputsBox.id = `${id}`;
    categoryList.append(inputsBox);
    const values = document.createElement("span");
    values.classList.add("values");
    values.textContent =
        name === "Price" ? `$${0}   ⟷   $${1749}` : `${0}   ⟷   ${150}`;
    inputsBox.append(values);
    if (name === "Price") {
        const input_1 = document.createElement("input");
        input_1.setAttribute("value", "10");
        input_1.setAttribute("min", "10");
        input_1.setAttribute("max", "1749");
        input_1.setAttribute("step", "1");
        input_1.setAttribute("type", "range");
        inputsBox.append(input_1);
        const input_2 = document.createElement("input");
        input_2.setAttribute("value", "1749");
        input_2.setAttribute("min", "10");
        input_2.setAttribute("max", "1749");
        input_2.setAttribute("step", "1");
        input_2.setAttribute("type", "range");
        inputsBox.append(input_2);
    }
    if (name === "Stock") {
        const input_1 = document.createElement("input");
        input_1.setAttribute("value", "2");
        input_1.setAttribute("min", "2");
        input_1.setAttribute("max", "150");
        input_1.setAttribute("step", "1");
        input_1.setAttribute("type", "range");
        inputsBox.append(input_1);
        const input_2 = document.createElement("input");
        input_2.setAttribute("value", "150");
        input_2.setAttribute("min", "2");
        input_2.setAttribute("max", "150");
        input_2.setAttribute("step", "1");
        input_2.setAttribute("type", "range");
        inputsBox.append(input_2);
    }
    filterBox.append(category);
}
exports["default"] = drawRangeboxFilter;


/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getValues = exports.checkValues = void 0;
const chooseParamsObj_1 = __webpack_require__(305);
function checkValues() {
    const sliderContainers = document.getElementsByClassName("range-input");
    for (let i = 0; i < sliderContainers.length; i++) {
        const sliders = sliderContainers[i].getElementsByTagName("input");
        for (let j = 0; j < sliders.length; j++) {
            const inp = sliders[j];
            if (inp.type === "range") {
                inp.addEventListener("input", getValues);
            }
        }
    }
}
exports.checkValues = checkValues;
function getValues() {
    const parent = this.parentNode;
    if (parent) {
        const slides = parent.querySelectorAll("input");
        let slide1 = parseInt(slides[0].value);
        let slide2 = parseInt(slides[1].value);
        if (slide1 > slide2) {
            const temp = slide2;
            slide2 = slide1;
            slide1 = temp;
        }
        const displayElement = parent.querySelectorAll(".values")[0];
        if (displayElement.closest("#fl-price")) {
            displayElement.innerHTML = `$${slide1}   ⟷   $${slide2}`;
            chooseParamsObj_1.chooseParamsObj.price = [];
            if (slide1 === 10 && slide2 === 1749)
                chooseParamsObj_1.chooseParamsObj.price = [];
            else
                chooseParamsObj_1.chooseParamsObj.price.push(slide1, slide2);
        }
        else {
            displayElement.innerHTML = `${slide1}   ⟷   ${slide2}`;
            chooseParamsObj_1.chooseParamsObj.stock = [];
            if (slide1 === 2 && slide2 === 150)
                chooseParamsObj_1.chooseParamsObj.stock = [];
            else
                chooseParamsObj_1.chooseParamsObj.stock.push(slide1, slide2);
        }
    }
}
exports.getValues = getValues;


/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createFilterSection = void 0;
const index_1 = __webpack_require__(356);
const changeController_1 = __webpack_require__(521);
function createFilterSection(arr) {
    (0, index_1.drawFilterSection)(arr);
    (0, changeController_1.controllChanges)();
}
exports.createFilterSection = createFilterSection;


/***/ }),

/***/ 220:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetFilters = void 0;
const chooseParamsObj_1 = __webpack_require__(305);
// import { showNumberEachParam } from "../filter/showNumberEachParam";
// import data = require("../../assets/data.json");
function resetFilters() {
    const list = document.querySelectorAll(".input-box");
    list.forEach((el) => {
        el.childNodes.forEach((el) => {
            el.classList.remove("active");
        });
    });
    const input = document.querySelectorAll(".range-input");
    console.log(input);
    input.forEach((el) => {
        const slides = el.querySelectorAll("input");
        slides[0].value = `${slides[0].getAttribute("min")}`;
        slides[1].value = `${slides[1].getAttribute("max")}`;
        const displayElement = el.querySelectorAll(".values")[0];
        displayElement.innerHTML = `$${slides[0].value}   ⟷   $${slides[1].value}`;
    });
    chooseParamsObj_1.chooseParamsObj.brand = [];
    chooseParamsObj_1.chooseParamsObj.category = [];
    chooseParamsObj_1.chooseParamsObj.price = [];
    chooseParamsObj_1.chooseParamsObj.stock = [];
    if (chooseParamsObj_1.chooseParamsObj.sort)
        delete chooseParamsObj_1.chooseParamsObj.sort;
    const productItems = document.querySelectorAll(".block-element");
    productItems.forEach((el) => {
        el.classList.remove("hide");
    });
    const amount = document.querySelectorAll(".items-amount");
    amount.forEach((el) => {
        const textBefore = el.textContent;
        el.textContent = `${textBefore === null || textBefore === void 0 ? void 0 : textBefore.substring(2)}${textBefore === null || textBefore === void 0 ? void 0 : textBefore.substring(1)}`;
    });
    window.location.search = "";
}
exports.resetFilters = resetFilters;


/***/ }),

/***/ 519:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.show = exports.showFilterItems = void 0;
const checkboxController_1 = __webpack_require__(659);
const chooseParamsObj_1 = __webpack_require__(305);
const chooseParamsObj_2 = __webpack_require__(305);
const queryString_1 = __webpack_require__(272);
const sortFoundItems_1 = __webpack_require__(925);
function showFilterItems(event) {
    const ev = event.target;
    let param = "";
    if (ev.closest("#fl-category")) {
        param = "category";
    }
    if (ev.closest("#fl-brand")) {
        param = "brand";
    }
    const checkboxChange = (0, checkboxController_1.getInputValue)(event, param, chooseParamsObj_1.chooseParamsObj);
    if (checkboxChange) {
        if (param === "category" || param === "brand") {
            if (checkboxChange[1] == "add") {
                chooseParamsObj_1.chooseParamsObj[param].push(checkboxChange[0]);
            }
            else {
                chooseParamsObj_1.chooseParamsObj[param].splice(chooseParamsObj_1.chooseParamsObj[param].indexOf(checkboxChange[0]), 1);
            }
        }
    }
    show();
    // updateParamsObj();
    (0, queryString_1.updateQueryString)(chooseParamsObj_1.chooseParamsObj);
}
exports.showFilterItems = showFilterItems;
function show() {
    const arr = (0, chooseParamsObj_2.sort)();
    const params = [];
    const productItems = document.querySelectorAll(".block-element");
    arr.forEach((el) => {
        params.push(`${el.id}`);
    });
    if (params.length) {
        productItems.forEach((el) => {
            el.classList.add("hide");
            const id = el.getAttribute("id");
            if (params.includes(id)) {
                el.classList.remove("hide");
            }
        });
    }
    else if (chooseParamsObj_1.chooseParamsObj.category.length ||
        chooseParamsObj_1.chooseParamsObj.brand.length ||
        chooseParamsObj_1.chooseParamsObj.price.length ||
        chooseParamsObj_1.chooseParamsObj.stock.length) {
        productItems.forEach((el) => {
            el.classList.add("hide");
            const mainBox = document.querySelector(".products-container");
            if (mainBox) {
                mainBox.textContent = "NOT FOUND";
                mainBox.style.fontSize = "64px";
                mainBox.style.color = "red";
            }
        });
    }
    else {
        productItems.forEach((el) => {
            el.classList.remove("hide");
        });
    }
    if (chooseParamsObj_1.chooseParamsObj.sort) {
        const optionBox = document.querySelector(".sort-bar-select");
        switch (chooseParamsObj_1.chooseParamsObj.sort) {
            case "priceASC":
                optionBox.value = "Sort by price ASC";
                break;
            case "priceDESC":
                optionBox.value = "Sort by price DESC";
                break;
            case "ratingASC":
                optionBox.value = "Sort by rating ASC";
                break;
            case "ratingDESC":
                optionBox.value = "Sort by rating DESC";
                break;
        }
        (0, sortFoundItems_1.sortFoundItems)(chooseParamsObj_1.chooseParamsObj.sort, arr);
    }
}
exports.show = show;


/***/ }),

/***/ 517:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showNumberEachParam = void 0;
function showNumberEachParam(params) {
    if (document.location.search === "")
        return;
    const list = document.querySelectorAll(".items-amount");
    const categories = params.map((el) => el.category);
    const brandes = params.map((el) => el.brand);
    list.forEach((el) => {
        var _a, _b;
        const textBefore = el.textContent;
        el.textContent = `0${textBefore === null || textBefore === void 0 ? void 0 : textBefore.substring(1)}`;
        if ((_a = el.previousSibling) === null || _a === void 0 ? void 0 : _a.childNodes[1]) {
            const labelInput = (_b = el.previousSibling) === null || _b === void 0 ? void 0 : _b.childNodes[1].textContent;
            if (categories.includes(labelInput)) {
                const textBefore = el.textContent;
                el.textContent = `${categories.filter((i) => i === labelInput).length}${textBefore === null || textBefore === void 0 ? void 0 : textBefore.substring(1)}`;
            }
            if (brandes.includes(labelInput)) {
                const textBefore = el.textContent;
                el.textContent = `${brandes.filter((i) => i === labelInput).length}${textBefore === null || textBefore === void 0 ? void 0 : textBefore.substring(1)}`;
            }
        }
    });
}
exports.showNumberEachParam = showNumberEachParam;


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.x = void 0;
function renderFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = `
    <div class="year">2022</div>
    <a class="link" href="https://github.com/KOSHAK2008">
      <img class="icon github-icon" src="./icons/github_icon_128848.svg" alt="github_ico">
    </a>
    <a class="link" href="https://github.com/polyakowa-olga">
      <img class="icon github-icon" src="./icons/github_icon_128848.svg" alt="github_ico">
    </a>
    <a class="link" href="https://rs.school/js/">
      <img class="icon RSS-icon" src="./icons/rs_school_js.svg" alt="RSS_ico">
    </a>
    `;
    const mainContainer = document.querySelector(".container");
    mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.append(footer);
}
exports.x = renderFooter;


/***/ }),

/***/ 199:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.g = void 0;
function renderLogo() {
    const logoBox = document.createElement("a");
    logoBox.classList.add("header__logo");
    logoBox.classList.add("link");
    logoBox.href = `#${"main-page" /* PageId.MainPage */}`;
    const logoImg = document.createElement("img");
    logoImg.classList.add("logo__img");
    logoImg.src = "./images/Shopping-Bag-PNG-Pic.png";
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
    const sumBox = document.createElement("p");
    sumBox.classList.add("header__sum-box");
    sumBox.textContent = "Cart total: $0";
    return sumBox;
}
function renderCart() {
    const cartBox = document.createElement("a");
    cartBox.classList.add("header__basket");
    cartBox.classList.add("link");
    cartBox.href = `#${"cart-page" /* PageId.CartPage */}`;
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
function renderHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    header.append(renderLogo());
    header.append(renderSumBox());
    header.append(renderCart());
    const mainContainer = document.querySelector(".container");
    mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.prepend(header);
}
exports.g = renderHeader;


/***/ }),

/***/ 872:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.openElement = exports.component = void 0;
const openItem_1 = __webpack_require__(323);
Object.defineProperty(exports, "openElement", ({ enumerable: true, get: function () { return openItem_1.openElement; } }));
const addproduct_1 = __webpack_require__(544);
const addproduct_2 = __webpack_require__(544);
const basket_1 = __webpack_require__(62);
const showDataInHeader_1 = __webpack_require__(151);
function component(Element) {
    const id = Element.id;
    const name = Element.title;
    const path = Element.thumbnail;
    const brand = Element.brand;
    const category = Element.category;
    const price = Element.price;
    const discount = Element.discountPercentage;
    const rating = Element.rating;
    const stock = Element.stock;
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
    buttondetailsCard.href = `#${"item-page" /* PageId.ItemPage */}/${id}`; // olga
    buttondetailsCard.addEventListener("click", () => {
        (0, openItem_1.openElement)(Element);
    });
    buttonAddCard.addEventListener("click", () => {
        if (buttonAddCard.classList.contains("drop-from-cart")) {
            buttonAddCard.classList.remove("drop-from-cart");
            buttonAddCard.classList.add("add-cart");
            buttonAddCard.innerText = "ADD TO CART";
            (0, addproduct_2.deleteProduct)(Element);
        }
        else {
            (0, addproduct_1.addProduct)(Element);
            buttonAddCard.classList.remove("add-cart");
            buttonAddCard.classList.add("drop-from-cart");
            buttonAddCard.innerText = "DROP FROM CART";
        }
        for (let i = 0; i < basket_1.basket.length; i++) {
            if (basket_1.basket[i].title === Element.title) {
                buttonAddCard.classList.add("drop-from-cart");
                buttonAddCard.innerText = "DROP FROM CART";
            }
        }
        (0, showDataInHeader_1.showDataInHeader)();
    });
    for (let i = 0; i < basket_1.basket.length; i++) {
        if (basket_1.basket[i].title === Element.title) {
            buttonAddCard.innerText = "DROP FROM CART";
            buttonAddCard.classList.add("drop-from-cart");
        }
    }
    return blockElement;
}
exports.component = component;


/***/ }),

/***/ 323:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.openElement = void 0;
function openElement(element) {
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
            const openImg = document.querySelector(".product-grand-photo-img");
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
        const value = myObject[key];
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
exports.openElement = openElement;


/***/ }),

/***/ 505:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showProducts = void 0;
const data = __webpack_require__(914);
const item_1 = __webpack_require__(872);
// import { sort } from"./sort";
function showProducts() {
    const productscontainer = document.getElementById("products_container");
    const productsSort = document.createElement("div");
    const productsItems = document.createElement("div");
    const sortBar = document.createElement("div");
    const sortBarSelect = document.createElement("select");
    const viewAmountProducts = document.createElement("div");
    const amountProdunctsSpan = document.createElement("span");
    const amountProduncts = document.createElement("p");
    const searchBar = document.createElement("div");
    const viewProducts = document.createElement("div");
    const viewProductsSmall = document.createElement("div");
    const viewProductsBig = document.createElement("div");
    const searchProduct = document.createElement("input");
    productscontainer.appendChild(productsSort);
    productscontainer.appendChild(productsItems);
    // create select and option
    const sortArray = [
        "Sort options:",
        "Sort by price ASC",
        "Sort by price DESC",
        "Sort by rating ASC",
        "Sort by rating DESC",
        // "Sort by discount ASC",
        // "Sort by discount DESC",
    ];
    for (let i = 0; i < sortArray.length; i++) {
        const option = document.createElement("option");
        option.value = sortArray[i];
        option.text = sortArray[i];
        sortBarSelect.add(option);
    }
    productsSort.appendChild(sortBar);
    sortBar.appendChild(sortBarSelect);
    productsSort.appendChild(viewAmountProducts);
    productsSort.appendChild(searchBar);
    searchBar.appendChild(searchProduct);
    productsSort.appendChild(viewProducts);
    viewProducts.appendChild(viewProductsSmall);
    viewProducts.appendChild(viewProductsBig);
    viewAmountProducts.appendChild(amountProduncts);
    productsSort.classList.add("sort-products");
    productsItems.classList.add("products-items");
    viewAmountProducts.classList.add("view-amount-products");
    searchBar.classList.add("search-bar");
    viewProducts.classList.add("view-products");
    viewProductsSmall.classList.add("view-products-small");
    //////////////////////////////////////////////// olga
    const smallImg = document.createElement("img");
    smallImg.src = "./icons/small-mark.svg";
    smallImg.style.width = "40px";
    smallImg.style.height = "40px";
    viewProductsSmall.append(smallImg);
    //////////////////////////////////////////////////
    viewProductsBig.classList.add("view-products-big");
    //////////////////////////////////////////////// olga
    const bigImg = document.createElement("img");
    bigImg.src = "./icons/big-mark.svg";
    bigImg.style.width = "40px";
    bigImg.style.height = "40px";
    viewProductsBig.append(bigImg);
    //////////////////////////////////////////////////
    sortBarSelect.classList.add("sort-bar-select");
    amountProdunctsSpan.classList.add("amount-products"); // olga
    amountProdunctsSpan.innerText = `${data.products.length}`;
    amountProduncts.innerHTML = amountProduncts.innerText =
        `Found: ` + amountProdunctsSpan.outerHTML;
    searchProduct.setAttribute("type", "search");
    searchProduct.placeholder = "Search product";
    for (let i = 0; i < data.products.length; i++) {
        const Element = data.products[i];
        productsItems.appendChild((0, item_1.component)(Element));
    }
}
exports.showProducts = showProducts;


/***/ }),

/***/ 272:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDataFromQueryString = exports.updateQueryString = void 0;
const chooseParamsObj_1 = __webpack_require__(305);
const chooseParamsObj_2 = __webpack_require__(305);
function updateQueryString(obj) {
    let str = "";
    if (obj.category.length) {
        obj.category.forEach((el) => {
            if (!str)
                str += `category=${el}`;
            else if (str)
                str += `&category=${el}`;
        });
    }
    if (obj.brand.length) {
        obj.brand.forEach((el) => {
            if (!str)
                str += `brand=${el}`;
            else if (str)
                str += `&brand=${el}`;
        });
    }
    if (obj.price.length) {
        if (!str)
            str += `price=${obj.price[0]}to${obj.price[1]}`;
        else if (str)
            str += `&price=${obj.price[0]}to${obj.price[1]}`;
    }
    if (obj.stock.length) {
        if (!str)
            str += `stock=${obj.stock[0]}to${obj.stock[1]}`;
        else if (str)
            str += `&stock=${obj.stock[0]}to${obj.stock[1]}`;
    }
    if (obj.copy_link) {
        if (!str)
            str += `copy_link=${obj.copy_link}`;
        else if (str)
            str += `&copy_link=${obj.copy_link}`;
    }
    if (obj.sort) {
        if (!str)
            str += `sort=${obj.sort}`;
        else if (str)
            str += `&sort=${obj.sort}`;
    }
    document.location.search = str;
}
exports.updateQueryString = updateQueryString;
function getDataFromQueryString() {
    const arr = document.location.search.substring(1).split("&");
    for (let i = 0; i < arr.length; i++) {
        const arrProp = arr[i].split("=");
        const key = arrProp[0];
        const value = arrProp[1];
        for (const prop in chooseParamsObj_1.chooseParamsObj) {
            if (key === prop && key === "category") {
                if (!chooseParamsObj_1.chooseParamsObj.category.includes(value)) {
                    chooseParamsObj_1.chooseParamsObj.category.push(value);
                }
            }
            if (key === prop && key === "brand") {
                if (!chooseParamsObj_1.chooseParamsObj.brand.includes(value)) {
                    chooseParamsObj_1.chooseParamsObj.brand.push(value);
                }
            }
            if (key === prop && key === "price") {
                const range = arrProp[1].split("to");
                chooseParamsObj_1.chooseParamsObj.price.push(+range[0], +range[1]);
            }
            if (key === prop && key === "stock") {
                const range = arrProp[1].split("to");
                chooseParamsObj_1.chooseParamsObj.stock.push(+range[0], +range[1]);
            }
            if (key === "copy_link") {
                chooseParamsObj_1.chooseParamsObj.copy_link = arrProp[1];
            }
            if (key === "sort") {
                chooseParamsObj_1.chooseParamsObj.sort = arrProp[1];
            }
        }
    }
    console.log();
    (0, chooseParamsObj_2.getParamsObj)();
}
exports.getDataFromQueryString = getDataFromQueryString;


/***/ }),

/***/ 679:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showNumberItems = void 0;
function showNumberItems() {
    const productItems = document.querySelectorAll(".block-element");
    const amountProducts = document.querySelector(".amount-products");
    let num = 0;
    productItems.forEach((el) => {
        if (!el.classList.contains("hide"))
            num += 1;
    });
    if (amountProducts) {
        amountProducts.textContent = `${num}`;
    }
}
exports.showNumberItems = showNumberItems;


/***/ }),

/***/ 925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addMethodSortToParamsObj = exports.sortFoundItems = void 0;
const chooseParamsObj_1 = __webpack_require__(305);
const queryString_1 = __webpack_require__(272);
function sortFoundItems(method, arr) {
    const productItems = document.querySelectorAll(".block-element:not(.hide)");
    if (method === "priceASC") {
        arr.sort((a, b) => a.price - b.price);
    }
    if (method === "priceDESC") {
        arr.sort((a, b) => (a.price - b.price) * -1);
    }
    if (method === "ratingASC") {
        arr.sort((a, b) => a.rating - b.rating);
    }
    if (method === "ratingDESC") {
        arr.sort((a, b) => (a.rating - b.rating) * -1);
    }
    let num = 0;
    arr.forEach((el) => {
        productItems.forEach((item) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            if (el.id === +item.getAttribute("id")) {
                item.style.order = `${num}`;
                num += 1;
            }
        });
    });
}
exports.sortFoundItems = sortFoundItems;
function addMethodSortToParamsObj(event) {
    const ev = event.target;
    const value = ev.value;
    if (!value.startsWith("Sort by") && !chooseParamsObj_1.chooseParamsObj.sort)
        return;
    let metod = "";
    if (chooseParamsObj_1.chooseParamsObj.sort && value === "Sort options:")
        delete chooseParamsObj_1.chooseParamsObj.sort;
    console.log(chooseParamsObj_1.chooseParamsObj);
    if (value.startsWith("Sort by")) {
        switch (value) {
            case "Sort by price ASC":
                metod = "priceASC";
                if (chooseParamsObj_1.chooseParamsObj.sort === metod)
                    return;
                break;
            case "Sort by price DESC":
                metod = "priceDESC";
                if (chooseParamsObj_1.chooseParamsObj.sort === metod)
                    return;
                break;
            case "Sort by rating ASC":
                metod = "ratingASC";
                if (chooseParamsObj_1.chooseParamsObj.sort === metod)
                    return;
                break;
            case "Sort by rating DESC":
                metod = "ratingDESC";
                if (chooseParamsObj_1.chooseParamsObj.sort === metod)
                    return;
                break;
        }
        chooseParamsObj_1.chooseParamsObj.sort = metod;
    }
    console.log(chooseParamsObj_1.chooseParamsObj);
    (0, queryString_1.updateQueryString)(chooseParamsObj_1.chooseParamsObj);
}
exports.addMethodSortToParamsObj = addMethodSortToParamsObj;


/***/ }),

/***/ 914:
/***/ ((module) => {

module.exports = JSON.parse('{"products":[{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]},{"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/2/1.jpg","https://i.dummyjson.com/data/products/2/2.jpg","https://i.dummyjson.com/data/products/2/3.jpg","https://i.dummyjson.com/data/products/2/thumbnail.jpg"]},{"id":3,"title":"Samsung Universe 9","description":"Samsung\'s new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/3/1.jpg"]},{"id":4,"title":"OPPOF19","description":"OPPO F19 is officially announced on April 2021.","price":280,"discountPercentage":17.91,"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/4/1.jpg","https://i.dummyjson.com/data/products/4/2.jpg","https://i.dummyjson.com/data/products/4/3.jpg","https://i.dummyjson.com/data/products/4/4.jpg","https://i.dummyjson.com/data/products/4/thumbnail.jpg"]},{"id":5,"title":"Huawei P30","description":"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.","price":499,"discountPercentage":10.58,"rating":4.09,"stock":32,"brand":"Huawei","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/5/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/5/1.jpg","https://i.dummyjson.com/data/products/5/2.jpg","https://i.dummyjson.com/data/products/5/3.jpg"]},{"id":6,"title":"MacBook Pro","description":"MacBook Pro 2021 with mini-LED display may launch between September, November","price":1749,"discountPercentage":11.02,"rating":4.57,"stock":83,"brand":"APPle","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/6/thumbnail.png","images":["https://i.dummyjson.com/data/products/6/1.png","https://i.dummyjson.com/data/products/6/2.jpg","https://i.dummyjson.com/data/products/6/3.png","https://i.dummyjson.com/data/products/6/4.jpg"]},{"id":7,"title":"Samsung Galaxy Book","description":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","price":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/7/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/7/1.jpg","https://i.dummyjson.com/data/products/7/2.jpg","https://i.dummyjson.com/data/products/7/3.jpg","https://i.dummyjson.com/data/products/7/thumbnail.jpg"]},{"id":8,"title":"Microsoft Surface Laptop 4","description":"Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.","price":1499,"discountPercentage":10.23,"rating":4.43,"stock":68,"brand":"Microsoft Surface","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/8/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/8/1.jpg","https://i.dummyjson.com/data/products/8/2.jpg","https://i.dummyjson.com/data/products/8/3.jpg","https://i.dummyjson.com/data/products/8/4.jpg","https://i.dummyjson.com/data/products/8/thumbnail.jpg"]},{"id":9,"title":"Infinix INBOOK","description":"Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty","price":1099,"discountPercentage":11.83,"rating":4.54,"stock":96,"brand":"Infinix","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/9/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/9/1.jpg","https://i.dummyjson.com/data/products/9/2.png","https://i.dummyjson.com/data/products/9/3.png","https://i.dummyjson.com/data/products/9/4.jpg","https://i.dummyjson.com/data/products/9/thumbnail.jpg"]},{"id":10,"title":"HP Pavilion 15-DK1056WM","description":"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","price":1099,"discountPercentage":6.18,"rating":4.43,"stock":89,"brand":"HP Pavilion","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/10/thumbnail.jpeg","images":["https://i.dummyjson.com/data/products/10/1.jpg","https://i.dummyjson.com/data/products/10/2.jpg","https://i.dummyjson.com/data/products/10/3.jpg","https://i.dummyjson.com/data/products/10/thumbnail.jpeg"]},{"id":11,"title":"perfume Oil","description":"Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil","price":13,"discountPercentage":8.4,"rating":4.26,"stock":65,"brand":"Impression of Acqua Di Gio","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/11/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/11/1.jpg","https://i.dummyjson.com/data/products/11/2.jpg","https://i.dummyjson.com/data/products/11/3.jpg","https://i.dummyjson.com/data/products/11/thumbnail.jpg"]},{"id":12,"title":"Brown Perfume","description":"Royal_Mirage Sport Brown Perfume for Men & Women - 120ml","price":40,"discountPercentage":15.66,"rating":4,"stock":52,"brand":"Royal_Mirage","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/12/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/12/1.jpg","https://i.dummyjson.com/data/products/12/2.jpg","https://i.dummyjson.com/data/products/12/3.png","https://i.dummyjson.com/data/products/12/4.jpg","https://i.dummyjson.com/data/products/12/thumbnail.jpg"]},{"id":13,"title":"Fog Scent Xpressio Perfume","description":"Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men","price":13,"discountPercentage":8.14,"rating":4.59,"stock":61,"brand":"Fog Scent Xpressio","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/13/thumbnail.webp","images":["https://i.dummyjson.com/data/products/13/1.jpg","https://i.dummyjson.com/data/products/13/2.png","https://i.dummyjson.com/data/products/13/3.jpg","https://i.dummyjson.com/data/products/13/4.jpg","https://i.dummyjson.com/data/products/13/thumbnail.webp"]},{"id":14,"title":"Non-Alcoholic Concentrated Perfume Oil","description":"Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil","price":120,"discountPercentage":15.6,"rating":4.21,"stock":114,"brand":"Al Munakh","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/14/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/14/1.jpg","https://i.dummyjson.com/data/products/14/2.jpg","https://i.dummyjson.com/data/products/14/3.jpg","https://i.dummyjson.com/data/products/14/thumbnail.jpg"]},{"id":15,"title":"Eau De Perfume Spray","description":"Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality","price":30,"discountPercentage":10.99,"rating":4.7,"stock":105,"brand":"Lord - Al-Rehab","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/15/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/15/1.jpg","https://i.dummyjson.com/data/products/15/2.jpg","https://i.dummyjson.com/data/products/15/3.jpg","https://i.dummyjson.com/data/products/15/4.jpg","https://i.dummyjson.com/data/products/15/thumbnail.jpg"]},{"id":16,"title":"Hyaluronic Acid Serum","description":"L\'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid","price":19,"discountPercentage":13.31,"rating":4.83,"stock":110,"brand":"L\'Oreal Paris","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/16/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/16/1.png","https://i.dummyjson.com/data/products/16/2.webp","https://i.dummyjson.com/data/products/16/3.jpg","https://i.dummyjson.com/data/products/16/4.jpg","https://i.dummyjson.com/data/products/16/thumbnail.jpg"]},{"id":17,"title":"Tree Oil 30ml","description":"Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,","price":12,"discountPercentage":4.09,"rating":4.52,"stock":78,"brand":"Hemani Tea","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/17/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/17/1.jpg","https://i.dummyjson.com/data/products/17/2.jpg","https://i.dummyjson.com/data/products/17/3.jpg","https://i.dummyjson.com/data/products/17/thumbnail.jpg"]},{"id":18,"title":"Oil Free Moisturizer 100ml","description":"Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.","price":40,"discountPercentage":13.1,"rating":4.56,"stock":88,"brand":"Dermive","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/18/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/18/1.jpg","https://i.dummyjson.com/data/products/18/2.jpg","https://i.dummyjson.com/data/products/18/3.jpg","https://i.dummyjson.com/data/products/18/4.jpg","https://i.dummyjson.com/data/products/18/thumbnail.jpg"]},{"id":19,"title":"Skin Beauty Serum.","description":"Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m","price":46,"discountPercentage":10.68,"rating":4.42,"stock":54,"brand":"ROREC White Rice","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/19/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/19/1.jpg","https://i.dummyjson.com/data/products/19/2.jpg","https://i.dummyjson.com/data/products/19/3.png","https://i.dummyjson.com/data/products/19/thumbnail.jpg"]},{"id":20,"title":"Freckle Treatment Cream- 15gm","description":"Fair & Clear is Pakistan\'s only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.","price":70,"discountPercentage":16.99,"rating":4.06,"stock":140,"brand":"Fair & Clear","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/20/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/20/1.jpg","https://i.dummyjson.com/data/products/20/2.jpg","https://i.dummyjson.com/data/products/20/3.jpg","https://i.dummyjson.com/data/products/20/4.jpg","https://i.dummyjson.com/data/products/20/thumbnail.jpg"]},{"id":21,"title":"- Daal Masoor 500 grams","description":"Fine quality Branded Product Keep in a cool and dry place","price":20,"discountPercentage":4.81,"rating":4.44,"stock":133,"brand":"Saaf & Khaas","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/21/thumbnail.png","images":["https://i.dummyjson.com/data/products/21/1.png","https://i.dummyjson.com/data/products/21/2.jpg","https://i.dummyjson.com/data/products/21/3.jpg"]},{"id":22,"title":"Elbow Macaroni - 400 gm","description":"Product details of Bake Parlor Big Elbow Macaroni - 400 gm","price":14,"discountPercentage":15.58,"rating":4.57,"stock":146,"brand":"Bake Parlor Big","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/22/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/22/1.jpg","https://i.dummyjson.com/data/products/22/2.jpg","https://i.dummyjson.com/data/products/22/3.jpg"]},{"id":23,"title":"Orange Essence Food Flavou","description":"Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item","price":14,"discountPercentage":8.04,"rating":4.85,"stock":26,"brand":"Baking Food Items","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/23/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/23/1.jpg","https://i.dummyjson.com/data/products/23/2.jpg","https://i.dummyjson.com/data/products/23/3.jpg","https://i.dummyjson.com/data/products/23/4.jpg","https://i.dummyjson.com/data/products/23/thumbnail.jpg"]},{"id":24,"title":"cereals muesli fruit nuts","description":"original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji","price":46,"discountPercentage":16.8,"rating":4.94,"stock":113,"brand":"fauji","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/24/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/24/1.jpg","https://i.dummyjson.com/data/products/24/2.jpg","https://i.dummyjson.com/data/products/24/3.jpg","https://i.dummyjson.com/data/products/24/4.jpg","https://i.dummyjson.com/data/products/24/thumbnail.jpg"]},{"id":25,"title":"Gulab Powder 50 Gram","description":"Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds","price":70,"discountPercentage":13.58,"rating":4.87,"stock":47,"brand":"Dry Rose","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/25/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/25/1.png","https://i.dummyjson.com/data/products/25/2.jpg","https://i.dummyjson.com/data/products/25/3.png","https://i.dummyjson.com/data/products/25/4.jpg","https://i.dummyjson.com/data/products/25/thumbnail.jpg"]},{"id":26,"title":"Plant Hanger For Home","description":"Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf","price":41,"discountPercentage":17.86,"rating":4.08,"stock":131,"brand":"Boho Decor","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/26/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/26/1.jpg","https://i.dummyjson.com/data/products/26/2.jpg","https://i.dummyjson.com/data/products/26/3.jpg","https://i.dummyjson.com/data/products/26/4.jpg","https://i.dummyjson.com/data/products/26/5.jpg","https://i.dummyjson.com/data/products/26/thumbnail.jpg"]},{"id":27,"title":"Flying Wooden Bird","description":"Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm","price":51,"discountPercentage":15.58,"rating":4.41,"stock":17,"brand":"Flying Wooden","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/27/thumbnail.webp","images":["https://i.dummyjson.com/data/products/27/1.jpg","https://i.dummyjson.com/data/products/27/2.jpg","https://i.dummyjson.com/data/products/27/3.jpg","https://i.dummyjson.com/data/products/27/4.jpg","https://i.dummyjson.com/data/products/27/thumbnail.webp"]},{"id":28,"title":"3D Embellishment Art Lamp","description":"3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)","price":20,"discountPercentage":16.49,"rating":4.82,"stock":54,"brand":"LED Lights","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/28/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/28/1.jpg","https://i.dummyjson.com/data/products/28/2.jpg","https://i.dummyjson.com/data/products/28/3.png","https://i.dummyjson.com/data/products/28/4.jpg","https://i.dummyjson.com/data/products/28/thumbnail.jpg"]},{"id":29,"title":"Handcraft Chinese style","description":"Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate","price":60,"discountPercentage":15.34,"rating":4.44,"stock":7,"brand":"luxury palace","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/29/thumbnail.webp","images":["https://i.dummyjson.com/data/products/29/1.jpg","https://i.dummyjson.com/data/products/29/2.jpg","https://i.dummyjson.com/data/products/29/3.webp","https://i.dummyjson.com/data/products/29/4.webp","https://i.dummyjson.com/data/products/29/thumbnail.webp"]},{"id":30,"title":"Key Holder","description":"Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality","price":30,"discountPercentage":2.92,"rating":4.92,"stock":54,"brand":"Golden","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/30/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/30/1.jpg","https://i.dummyjson.com/data/products/30/2.jpg","https://i.dummyjson.com/data/products/30/3.jpg","https://i.dummyjson.com/data/products/30/thumbnail.jpg"]},{"id":31,"title":"Mornadi Velvet Bed","description":"Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set","price":40,"discountPercentage":17,"rating":4.16,"stock":140,"brand":"Furniture Bed Set","category":"furniture","thumbnail":"https://i.dummyjson.com/data/products/31/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/31/1.jpg","https://i.dummyjson.com/data/products/31/2.jpg","https://i.dummyjson.com/data/products/31/3.jpg","https://i.dummyjson.com/data/products/31/4.jpg","https://i.dummyjson.com/data/products/31/thumbnail.jpg"]},{"id":32,"title":"Sofa for Coffe Cafe","description":"Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe","price":50,"discountPercentage":15.59,"rating":4.74,"stock":30,"brand":"Ratttan Outdoor","category":"furniture","thumbnail":"https://i.dummyjson.com/data/products/32/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/32/1.jpg","https://i.dummyjson.com/data/products/32/2.jpg","https://i.dummyjson.com/data/products/32/3.jpg","https://i.dummyjson.com/data/products/32/thumbnail.jpg"]},{"id":33,"title":"3 Tier Corner Shelves","description":"3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf","price":700,"discountPercentage":17,"rating":4.31,"stock":106,"brand":"Kitchen Shelf","category":"furniture","thumbnail":"https://i.dummyjson.com/data/products/33/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/33/1.jpg","https://i.dummyjson.com/data/products/33/2.jpg","https://i.dummyjson.com/data/products/33/3.jpg","https://i.dummyjson.com/data/products/33/4.jpg","https://i.dummyjson.com/data/products/33/thumbnail.jpg"]},{"id":34,"title":"Plastic Table","description":"V﻿ery good quality plastic table for multi purpose now in reasonable price","price":50,"discountPercentage":4,"rating":4.01,"stock":136,"brand":"Multi Purpose","category":"furniture","thumbnail":"https://i.dummyjson.com/data/products/34/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/34/1.jpg","https://i.dummyjson.com/data/products/34/2.jpg","https://i.dummyjson.com/data/products/34/3.jpg","https://i.dummyjson.com/data/products/34/4.jpg","https://i.dummyjson.com/data/products/34/thumbnail.jpg"]},{"id":35,"title":"3 DOOR PORTABLE","description":"Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe","price":41,"discountPercentage":7.98,"rating":4.06,"stock":68,"brand":"AmnaMart","category":"furniture","thumbnail":"https://i.dummyjson.com/data/products/35/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/35/1.jpg","https://i.dummyjson.com/data/products/35/2.jpg","https://i.dummyjson.com/data/products/35/3.jpg","https://i.dummyjson.com/data/products/35/4.jpg","https://i.dummyjson.com/data/products/35/thumbnail.jpg"]},{"id":36,"title":"Sleeve Shirt Womens","description":"Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized","price":90,"discountPercentage":10.89,"rating":4.26,"stock":39,"brand":"Professional Wear","category":"tops","thumbnail":"https://i.dummyjson.com/data/products/36/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/36/1.jpg","https://i.dummyjson.com/data/products/36/2.webp","https://i.dummyjson.com/data/products/36/3.webp","https://i.dummyjson.com/data/products/36/4.jpg","https://i.dummyjson.com/data/products/36/thumbnail.jpg"]},{"id":37,"title":"ank Tops for Womens/Girls","description":"PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS","price":50,"discountPercentage":12.05,"rating":4.52,"stock":107,"brand":"Soft Cotton","category":"tops","thumbnail":"https://i.dummyjson.com/data/products/37/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/37/1.jpg","https://i.dummyjson.com/data/products/37/2.jpg","https://i.dummyjson.com/data/products/37/3.jpg","https://i.dummyjson.com/data/products/37/4.jpg","https://i.dummyjson.com/data/products/37/thumbnail.jpg"]},{"id":38,"title":"sublimation plain kids tank","description":"sublimation plain kids tank tops wholesale","price":100,"discountPercentage":11.12,"rating":4.8,"stock":20,"brand":"Soft Cotton","category":"tops","thumbnail":"https://i.dummyjson.com/data/products/38/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/38/1.png","https://i.dummyjson.com/data/products/38/2.jpg","https://i.dummyjson.com/data/products/38/3.jpg","https://i.dummyjson.com/data/products/38/4.jpg"]},{"id":39,"title":"Women Sweaters Wool","description":"2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women\' S Crop Top Sweater","price":600,"discountPercentage":17.2,"rating":4.55,"stock":55,"brand":"Top Sweater","category":"tops","thumbnail":"https://i.dummyjson.com/data/products/39/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/39/1.jpg","https://i.dummyjson.com/data/products/39/2.jpg","https://i.dummyjson.com/data/products/39/3.jpg","https://i.dummyjson.com/data/products/39/4.jpg","https://i.dummyjson.com/data/products/39/thumbnail.jpg"]},{"id":40,"title":"women winter clothes","description":"women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set","price":57,"discountPercentage":13.39,"rating":4.91,"stock":84,"brand":"Top Sweater","category":"tops","thumbnail":"https://i.dummyjson.com/data/products/40/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/40/1.jpg","https://i.dummyjson.com/data/products/40/2.jpg"]},{"id":41,"title":"NIGHT SUIT","description":"NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.","price":55,"discountPercentage":15.05,"rating":4.65,"stock":21,"brand":"RED MICKY MOUSE..","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/41/thumbnail.webp","images":["https://i.dummyjson.com/data/products/41/1.jpg","https://i.dummyjson.com/data/products/41/2.webp","https://i.dummyjson.com/data/products/41/3.jpg","https://i.dummyjson.com/data/products/41/4.jpg","https://i.dummyjson.com/data/products/41/thumbnail.webp"]},{"id":42,"title":"Stiched Kurta plus trouser","description":"FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN","price":80,"discountPercentage":15.37,"rating":4.05,"stock":148,"brand":"Digital Printed","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/42/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/42/1.png","https://i.dummyjson.com/data/products/42/2.png","https://i.dummyjson.com/data/products/42/3.png","https://i.dummyjson.com/data/products/42/4.jpg","https://i.dummyjson.com/data/products/42/thumbnail.jpg"]},{"id":43,"title":"frock gold printed","description":"Ghazi fabric long frock gold printed ready to wear stitched collection (G992)","price":600,"discountPercentage":15.55,"rating":4.31,"stock":150,"brand":"Ghazi Fabric","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/43/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/43/1.jpg","https://i.dummyjson.com/data/products/43/2.jpg","https://i.dummyjson.com/data/products/43/3.jpg","https://i.dummyjson.com/data/products/43/4.jpg","https://i.dummyjson.com/data/products/43/thumbnail.jpg"]},{"id":44,"title":"Ladies Multicolored Dress","description":"This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.","price":79,"discountPercentage":16.88,"rating":4.03,"stock":2,"brand":"Ghazi Fabric","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/44/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/44/1.jpg","https://i.dummyjson.com/data/products/44/2.jpg","https://i.dummyjson.com/data/products/44/3.jpg","https://i.dummyjson.com/data/products/44/4.jpg","https://i.dummyjson.com/data/products/44/thumbnail.jpg"]},{"id":45,"title":"Malai Maxi Dress","description":"Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff","price":50,"discountPercentage":5.07,"rating":4.67,"stock":96,"brand":"IELGY","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/45/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/45/1.jpg","https://i.dummyjson.com/data/products/45/2.webp","https://i.dummyjson.com/data/products/45/3.jpg","https://i.dummyjson.com/data/products/45/4.jpg","https://i.dummyjson.com/data/products/45/thumbnail.jpg"]},{"id":46,"title":"women\'s shoes","description":"Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber","price":40,"discountPercentage":16.96,"rating":4.14,"stock":72,"brand":"IELGY fashion","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/46/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/46/1.webp","https://i.dummyjson.com/data/products/46/2.jpg","https://i.dummyjson.com/data/products/46/3.jpg","https://i.dummyjson.com/data/products/46/4.jpg","https://i.dummyjson.com/data/products/46/thumbnail.jpg"]},{"id":47,"title":"Sneaker shoes","description":"Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women","price":120,"discountPercentage":10.37,"rating":4.19,"stock":50,"brand":"Synthetic Leather","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/47/thumbnail.jpeg","images":["https://i.dummyjson.com/data/products/47/1.jpg","https://i.dummyjson.com/data/products/47/2.jpg","https://i.dummyjson.com/data/products/47/3.jpg","https://i.dummyjson.com/data/products/47/thumbnail.jpeg"]},{"id":48,"title":"Women Strip Heel","description":"Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped","price":40,"discountPercentage":10.83,"rating":4.02,"stock":25,"brand":"Sandals Flip Flops","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/48/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/48/1.jpg","https://i.dummyjson.com/data/products/48/2.jpg","https://i.dummyjson.com/data/products/48/3.jpg","https://i.dummyjson.com/data/products/48/4.jpg","https://i.dummyjson.com/data/products/48/thumbnail.jpg"]},{"id":49,"title":"Chappals & Shoe Ladies Metallic","description":"Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals","price":23,"discountPercentage":2.62,"rating":4.72,"stock":107,"brand":"Maasai Sandals","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/49/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/49/1.jpg","https://i.dummyjson.com/data/products/49/2.jpg","https://i.dummyjson.com/data/products/49/3.webp","https://i.dummyjson.com/data/products/49/thumbnail.jpg"]},{"id":50,"title":"Women Shoes","description":"2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes","price":36,"discountPercentage":16.87,"rating":4.33,"stock":46,"brand":"Arrivals Genuine","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/50/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/50/1.jpeg","https://i.dummyjson.com/data/products/50/2.jpg","https://i.dummyjson.com/data/products/50/3.jpg"]},{"id":51,"title":"half sleeves T shirts","description":"Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands","price":23,"discountPercentage":12.76,"rating":4.26,"stock":132,"brand":"Vintage Apparel","category":"mens-shirts","thumbnail":"https://i.dummyjson.com/data/products/51/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/51/1.png","https://i.dummyjson.com/data/products/51/2.jpg","https://i.dummyjson.com/data/products/51/3.jpg","https://i.dummyjson.com/data/products/51/thumbnail.jpg"]},{"id":52,"title":"FREE FIRE T Shirt","description":"quality and professional print - It doesn\'t just look high quality, it is high quality.","price":10,"discountPercentage":14.72,"rating":4.52,"stock":128,"brand":"FREE FIRE","category":"mens-shirts","thumbnail":"https://i.dummyjson.com/data/products/52/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/52/1.png","https://i.dummyjson.com/data/products/52/2.png","https://i.dummyjson.com/data/products/52/3.jpg","https://i.dummyjson.com/data/products/52/4.jpg","https://i.dummyjson.com/data/products/52/thumbnail.jpg"]},{"id":53,"title":"printed high quality T shirts","description":"Brand: vintage Apparel ,Export quality","price":35,"discountPercentage":7.54,"rating":4.89,"stock":6,"brand":"Vintage Apparel","category":"mens-shirts","thumbnail":"https://i.dummyjson.com/data/products/53/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/53/1.webp","https://i.dummyjson.com/data/products/53/2.jpg","https://i.dummyjson.com/data/products/53/3.jpg","https://i.dummyjson.com/data/products/53/4.jpg","https://i.dummyjson.com/data/products/53/thumbnail.jpg"]},{"id":54,"title":"Pubg Printed Graphic T-Shirt","description":"Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking","price":46,"discountPercentage":16.44,"rating":4.62,"stock":136,"brand":"The Warehouse","category":"mens-shirts","thumbnail":"https://i.dummyjson.com/data/products/54/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/54/1.jpg","https://i.dummyjson.com/data/products/54/2.jpg","https://i.dummyjson.com/data/products/54/3.jpg","https://i.dummyjson.com/data/products/54/4.jpg","https://i.dummyjson.com/data/products/54/thumbnail.jpg"]},{"id":55,"title":"Money Heist Printed Summer T Shirts","description":"Fabric Jercy, Size: M & L Wear Stylish Dual Stiched","price":66,"discountPercentage":15.97,"rating":4.9,"stock":122,"brand":"The Warehouse","category":"mens-shirts","thumbnail":"https://i.dummyjson.com/data/products/55/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/55/1.jpg","https://i.dummyjson.com/data/products/55/2.webp","https://i.dummyjson.com/data/products/55/3.jpg","https://i.dummyjson.com/data/products/55/4.jpg","https://i.dummyjson.com/data/products/55/thumbnail.jpg"]},{"id":56,"title":"Sneakers Joggers Shoes","description":"Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New","price":40,"discountPercentage":12.57,"rating":4.38,"stock":6,"brand":"Sneakers","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/56/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/56/1.jpg","https://i.dummyjson.com/data/products/56/2.jpg","https://i.dummyjson.com/data/products/56/3.jpg","https://i.dummyjson.com/data/products/56/4.jpg","https://i.dummyjson.com/data/products/56/5.jpg","https://i.dummyjson.com/data/products/56/thumbnail.jpg"]},{"id":57,"title":"Loafers for men","description":"Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.","price":47,"discountPercentage":10.91,"rating":4.91,"stock":20,"brand":"Rubber","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/57/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/57/1.jpg","https://i.dummyjson.com/data/products/57/2.jpg","https://i.dummyjson.com/data/products/57/3.jpg","https://i.dummyjson.com/data/products/57/4.jpg","https://i.dummyjson.com/data/products/57/thumbnail.jpg"]},{"id":58,"title":"formal offices shoes","description":"Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber","price":57,"discountPercentage":12,"rating":4.41,"stock":68,"brand":"The Warehouse","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/58/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/58/1.jpg","https://i.dummyjson.com/data/products/58/2.jpg","https://i.dummyjson.com/data/products/58/3.jpg","https://i.dummyjson.com/data/products/58/4.jpg","https://i.dummyjson.com/data/products/58/thumbnail.jpg"]},{"id":59,"title":"Spring and summershoes","description":"Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;","price":20,"discountPercentage":8.71,"rating":4.33,"stock":137,"brand":"Sneakers","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/59/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/59/1.jpg","https://i.dummyjson.com/data/products/59/2.jpg","https://i.dummyjson.com/data/products/59/3.jpg","https://i.dummyjson.com/data/products/59/4.jpg","https://i.dummyjson.com/data/products/59/thumbnail.jpg"]},{"id":60,"title":"Stylish Casual Jeans Shoes","description":"High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable","price":58,"discountPercentage":7.55,"rating":4.55,"stock":129,"brand":"Sneakers","category":"mens-shoes","thumbnail":"https://i.dummyjson.com/data/products/60/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/60/1.jpg","https://i.dummyjson.com/data/products/60/2.jpg","https://i.dummyjson.com/data/products/60/3.jpg","https://i.dummyjson.com/data/products/60/thumbnail.jpg"]},{"id":61,"title":"Leather Straps Wristwatch","description":"Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar","price":120,"discountPercentage":7.14,"rating":4.63,"stock":91,"brand":"Naviforce","category":"mens-watches","thumbnail":"https://i.dummyjson.com/data/products/61/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/61/1.jpg","https://i.dummyjson.com/data/products/61/2.png","https://i.dummyjson.com/data/products/61/3.jpg"]},{"id":62,"title":"Waterproof Leather Brand Watch","description":"Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours","price":46,"discountPercentage":3.15,"rating":4.05,"stock":95,"brand":"SKMEI 9117","category":"mens-watches","thumbnail":"https://i.dummyjson.com/data/products/62/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/62/1.jpg","https://i.dummyjson.com/data/products/62/2.jpg"]},{"id":63,"title":"Royal Blue Premium Watch","description":"Men Silver Chain Royal Blue Premium Watch Latest Analog Watch","price":50,"discountPercentage":2.56,"rating":4.89,"stock":142,"brand":"SKMEI 9117","category":"mens-watches","thumbnail":"https://i.dummyjson.com/data/products/63/thumbnail.webp","images":["https://i.dummyjson.com/data/products/63/1.jpg","https://i.dummyjson.com/data/products/63/2.jpg","https://i.dummyjson.com/data/products/63/3.png","https://i.dummyjson.com/data/products/63/4.jpeg"]},{"id":64,"title":"Leather Strap Skeleton Watch","description":"Leather Strap Skeleton Watch for Men - Stylish and Latest Design","price":46,"discountPercentage":10.2,"rating":4.98,"stock":61,"brand":"Strap Skeleton","category":"mens-watches","thumbnail":"https://i.dummyjson.com/data/products/64/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/64/1.jpg","https://i.dummyjson.com/data/products/64/2.webp","https://i.dummyjson.com/data/products/64/3.jpg","https://i.dummyjson.com/data/products/64/thumbnail.jpg"]},{"id":65,"title":"Stainless Steel Wrist Watch","description":"Stylish Watch For Man (Luxury) Classy Men\'s Stainless Steel Wrist Watch - Box Packed","price":47,"discountPercentage":17.79,"rating":4.79,"stock":94,"brand":"Stainless","category":"mens-watches","thumbnail":"https://i.dummyjson.com/data/products/65/thumbnail.webp","images":["https://i.dummyjson.com/data/products/65/1.jpg","https://i.dummyjson.com/data/products/65/2.webp","https://i.dummyjson.com/data/products/65/3.jpg","https://i.dummyjson.com/data/products/65/4.webp","https://i.dummyjson.com/data/products/65/thumbnail.webp"]},{"id":66,"title":"Steel Analog Couple Watches","description":"Elegant design, Stylish ,Unique & Trendy,Comfortable wear","price":35,"discountPercentage":3.23,"rating":4.79,"stock":24,"brand":"Eastern Watches","category":"womens-watches","thumbnail":"https://i.dummyjson.com/data/products/66/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/66/1.jpg","https://i.dummyjson.com/data/products/66/2.jpg","https://i.dummyjson.com/data/products/66/3.jpg","https://i.dummyjson.com/data/products/66/4.JPG","https://i.dummyjson.com/data/products/66/thumbnail.jpg"]},{"id":67,"title":"Fashion Magnetic Wrist Watch","description":"Buy this awesome  The product is originally manufactured by the company and it\'s a top selling product with a very reasonable","price":60,"discountPercentage":16.69,"rating":4.03,"stock":46,"brand":"Eastern Watches","category":"womens-watches","thumbnail":"https://i.dummyjson.com/data/products/67/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/67/1.jpg","https://i.dummyjson.com/data/products/67/2.jpg","https://i.dummyjson.com/data/products/67/3.jpg","https://i.dummyjson.com/data/products/67/4.jpg","https://i.dummyjson.com/data/products/67/thumbnail.jpg"]},{"id":68,"title":"Stylish Luxury Digital Watch","description":"Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls","price":57,"discountPercentage":9.03,"rating":4.55,"stock":77,"brand":"Luxury Digital","category":"womens-watches","thumbnail":"https://i.dummyjson.com/data/products/68/thumbnail.webp","images":["https://i.dummyjson.com/data/products/68/1.jpg","https://i.dummyjson.com/data/products/68/2.jpg"]},{"id":69,"title":"Golden Watch Pearls Bracelet Watch","description":"Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women","price":47,"discountPercentage":17.55,"rating":4.77,"stock":89,"brand":"Watch Pearls","category":"womens-watches","thumbnail":"https://i.dummyjson.com/data/products/69/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/69/1.jpg","https://i.dummyjson.com/data/products/69/2.jpg","https://i.dummyjson.com/data/products/69/3.webp","https://i.dummyjson.com/data/products/69/4.jpg","https://i.dummyjson.com/data/products/69/thumbnail.jpg"]},{"id":70,"title":"Stainless Steel Women","description":"Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies","price":35,"discountPercentage":8.98,"rating":4.08,"stock":111,"brand":"Bracelet","category":"womens-watches","thumbnail":"https://i.dummyjson.com/data/products/70/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/70/1.jpg","https://i.dummyjson.com/data/products/70/2.jpg","https://i.dummyjson.com/data/products/70/thumbnail.jpg"]},{"id":71,"title":"Women Shoulder Bags","description":"LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies","price":46,"discountPercentage":14.65,"rating":4.71,"stock":17,"brand":"LouisWill","category":"womens-bags","thumbnail":"https://i.dummyjson.com/data/products/71/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/71/1.jpg","https://i.dummyjson.com/data/products/71/2.jpg","https://i.dummyjson.com/data/products/71/3.webp","https://i.dummyjson.com/data/products/71/thumbnail.jpg"]},{"id":72,"title":"Handbag For Girls","description":"This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.","price":23,"discountPercentage":17.5,"rating":4.91,"stock":27,"brand":"LouisWill","category":"womens-bags","thumbnail":"https://i.dummyjson.com/data/products/72/thumbnail.webp","images":["https://i.dummyjson.com/data/products/72/1.jpg","https://i.dummyjson.com/data/products/72/2.png","https://i.dummyjson.com/data/products/72/3.webp","https://i.dummyjson.com/data/products/72/4.jpg","https://i.dummyjson.com/data/products/72/thumbnail.webp"]},{"id":73,"title":"Fancy hand clutch","description":"This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.","price":44,"discountPercentage":10.39,"rating":4.18,"stock":101,"brand":"Bracelet","category":"womens-bags","thumbnail":"https://i.dummyjson.com/data/products/73/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/73/1.jpg","https://i.dummyjson.com/data/products/73/2.webp","https://i.dummyjson.com/data/products/73/3.jpg","https://i.dummyjson.com/data/products/73/thumbnail.jpg"]},{"id":74,"title":"Leather Hand Bag","description":"It features an attractive design that makes it a must have accessory in your collection. We sell different kind of bags for boys, kids, women, girls and also for unisex.","price":57,"discountPercentage":11.19,"rating":4.01,"stock":43,"brand":"Copenhagen Luxe","category":"womens-bags","thumbnail":"https://i.dummyjson.com/data/products/74/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/74/1.jpg","https://i.dummyjson.com/data/products/74/2.jpg","https://i.dummyjson.com/data/products/74/3.jpg","https://i.dummyjson.com/data/products/74/4.jpg","https://i.dummyjson.com/data/products/74/thumbnail.jpg"]},{"id":75,"title":"Seven Pocket Women Bag","description":"Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag","price":68,"discountPercentage":14.87,"rating":4.93,"stock":13,"brand":"Steal Frame","category":"womens-bags","thumbnail":"https://i.dummyjson.com/data/products/75/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/75/1.jpg","https://i.dummyjson.com/data/products/75/2.jpg","https://i.dummyjson.com/data/products/75/3.jpg","https://i.dummyjson.com/data/products/75/thumbnail.jpg"]},{"id":76,"title":"Silver Ring Set Women","description":"Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious","price":70,"discountPercentage":13.57,"rating":4.61,"stock":51,"brand":"Darojay","category":"womens-jewellery","thumbnail":"https://i.dummyjson.com/data/products/76/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/76/1.jpg","https://i.dummyjson.com/data/products/76/2.jpg","https://i.dummyjson.com/data/products/76/thumbnail.jpg"]},{"id":77,"title":"Rose Ring","description":"Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable","price":100,"discountPercentage":3.22,"rating":4.21,"stock":149,"brand":"Copenhagen Luxe","category":"womens-jewellery","thumbnail":"https://i.dummyjson.com/data/products/77/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/77/1.jpg","https://i.dummyjson.com/data/products/77/2.jpg","https://i.dummyjson.com/data/products/77/3.jpg","https://i.dummyjson.com/data/products/77/thumbnail.jpg"]},{"id":78,"title":"Rhinestone Korean Style Open Rings","description":"Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women","price":30,"discountPercentage":8.02,"rating":4.69,"stock":9,"brand":"Fashion Jewellery","category":"womens-jewellery","thumbnail":"https://i.dummyjson.com/data/products/78/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/78/thumbnail.jpg"]},{"id":79,"title":"Elegant Female Pearl Earrings","description":"Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set","price":30,"discountPercentage":12.8,"rating":4.74,"stock":16,"brand":"Fashion Jewellery","category":"womens-jewellery","thumbnail":"https://i.dummyjson.com/data/products/79/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/79/1.jpg"]},{"id":80,"title":"Chain Pin Tassel Earrings","description":"Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)","price":45,"discountPercentage":17.75,"rating":4.59,"stock":9,"brand":"Cuff Butterfly","category":"womens-jewellery","thumbnail":"https://i.dummyjson.com/data/products/80/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/80/1.jpg","https://i.dummyjson.com/data/products/80/2.jpg","https://i.dummyjson.com/data/products/80/3.png","https://i.dummyjson.com/data/products/80/4.jpg","https://i.dummyjson.com/data/products/80/thumbnail.jpg"]},{"id":81,"title":"Round Silver Frame Sun Glasses","description":"A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor activities, social gatherings,","price":19,"discountPercentage":10.1,"rating":4.94,"stock":78,"brand":"Designer Sun Glasses","category":"sunglasses","thumbnail":"https://i.dummyjson.com/data/products/81/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/81/1.jpg","https://i.dummyjson.com/data/products/81/2.jpg","https://i.dummyjson.com/data/products/81/3.jpg","https://i.dummyjson.com/data/products/81/4.webp","https://i.dummyjson.com/data/products/81/thumbnail.jpg"]},{"id":82,"title":"Kabir Singh Square Sunglass","description":"Orignal Metal Kabir Singh design 2020 Sunglasses Men Brand Designer Sun Glasses Kabir Singh Square Sunglass","price":50,"discountPercentage":15.6,"rating":4.62,"stock":78,"brand":"Designer Sun Glasses","category":"sunglasses","thumbnail":"https://i.dummyjson.com/data/products/82/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/82/1.jpg","https://i.dummyjson.com/data/products/82/2.webp","https://i.dummyjson.com/data/products/82/3.jpg","https://i.dummyjson.com/data/products/82/4.jpg","https://i.dummyjson.com/data/products/82/thumbnail.jpg"]},{"id":83,"title":"Wiley X Night Vision Yellow Glasses","description":"Wiley X Night Vision Yellow Glasses for Riders - Night Vision Anti Fog Driving Glasses - Free Night Glass Cover - Shield Eyes From Dust and Virus- For Night Sport Matches","price":30,"discountPercentage":6.33,"rating":4.97,"stock":115,"brand":"mastar watch","category":"sunglasses","thumbnail":"https://i.dummyjson.com/data/products/83/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/83/1.jpg","https://i.dummyjson.com/data/products/83/2.jpg","https://i.dummyjson.com/data/products/83/3.jpg","https://i.dummyjson.com/data/products/83/4.jpg","https://i.dummyjson.com/data/products/83/thumbnail.jpg"]},{"id":84,"title":"Square Sunglasses","description":"Fashion Oversized Square Sunglasses Retro Gradient Big Frame Sunglasses For Women One Piece Gafas Shade Mirror Clear Lens 17059","price":28,"discountPercentage":13.89,"rating":4.64,"stock":64,"brand":"mastar watch","category":"sunglasses","thumbnail":"https://i.dummyjson.com/data/products/84/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/84/1.jpg","https://i.dummyjson.com/data/products/84/2.jpg","https://i.dummyjson.com/data/products/84/thumbnail.jpg"]},{"id":85,"title":"LouisWill Men Sunglasses","description":"LouisWill Men Sunglasses Polarized Sunglasses UV400 Sunglasses Day Night Dual Use Safety Driving Night Vision Eyewear AL-MG Frame Sun Glasses with Free Box for Drivers","price":50,"discountPercentage":11.27,"rating":4.98,"stock":92,"brand":"LouisWill","category":"sunglasses","thumbnail":"https://i.dummyjson.com/data/products/85/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/85/1.jpg","https://i.dummyjson.com/data/products/85/2.jpg","https://i.dummyjson.com/data/products/85/thumbnail.jpg"]},{"id":86,"title":"Bluetooth Aux","description":"Bluetooth Aux Bluetooth Car Aux Car Bluetooth Transmitter Aux Audio Receiver Handfree Car Bluetooth Music Receiver Universal 3.5mm Streaming A2DP Wireless Auto AUX Audio Adapter With Mic For Phone MP3","price":25,"discountPercentage":10.56,"rating":4.57,"stock":22,"brand":"Car Aux","category":"automotive","thumbnail":"https://i.dummyjson.com/data/products/86/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/86/1.jpg","https://i.dummyjson.com/data/products/86/2.webp","https://i.dummyjson.com/data/products/86/3.jpg","https://i.dummyjson.com/data/products/86/4.jpg","https://i.dummyjson.com/data/products/86/thumbnail.jpg"]},{"id":87,"title":"t Temperature Controller Incubator Controller","description":"Both Heat and Cool Purpose, Temperature control range; -50 to +110, Temperature measurement accuracy; 0.1, Control accuracy; 0.1","price":40,"discountPercentage":11.3,"rating":4.54,"stock":37,"brand":"W1209 DC12V","category":"automotive","thumbnail":"https://i.dummyjson.com/data/products/87/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/87/1.jpg","https://i.dummyjson.com/data/products/87/2.jpg","https://i.dummyjson.com/data/products/87/3.jpg","https://i.dummyjson.com/data/products/87/4.jpg","https://i.dummyjson.com/data/products/87/thumbnail.jpg"]},{"id":88,"title":"TC Reusable Silicone Magic Washing Gloves","description":"TC Reusable Silicone Magic Washing Gloves with Scrubber, Cleaning Brush Scrubber Gloves Heat Resistant Pair for Cleaning of Kitchen, Dishes, Vegetables and Fruits, Bathroom, Car Wash, Pet Care and Multipurpose","price":29,"discountPercentage":3.19,"rating":4.98,"stock":42,"brand":"TC Reusable","category":"automotive","thumbnail":"https://i.dummyjson.com/data/products/88/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/88/1.jpg","https://i.dummyjson.com/data/products/88/2.jpg","https://i.dummyjson.com/data/products/88/3.jpg","https://i.dummyjson.com/data/products/88/4.webp","https://i.dummyjson.com/data/products/88/thumbnail.jpg"]},{"id":89,"title":"Qualcomm original Car Charger","description":"best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all","price":40,"discountPercentage":17.53,"rating":4.2,"stock":79,"brand":"TC Reusable","category":"automotive","thumbnail":"https://i.dummyjson.com/data/products/89/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/89/1.jpg","https://i.dummyjson.com/data/products/89/2.jpg","https://i.dummyjson.com/data/products/89/3.jpg","https://i.dummyjson.com/data/products/89/4.jpg","https://i.dummyjson.com/data/products/89/thumbnail.jpg"]},{"id":90,"title":"Cycle Bike Glow","description":"Universal fitment and easy to install no special wires, can be easily installed and removed. Fits most standard tyre air stem valves of road, mountain bicycles, motocycles and cars.Bright led will turn on w","price":35,"discountPercentage":11.08,"rating":4.1,"stock":63,"brand":"Neon LED Light","category":"automotive","thumbnail":"https://i.dummyjson.com/data/products/90/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/90/1.jpg","https://i.dummyjson.com/data/products/90/2.jpg","https://i.dummyjson.com/data/products/90/3.jpg","https://i.dummyjson.com/data/products/90/4.jpg","https://i.dummyjson.com/data/products/90/thumbnail.jpg"]},{"id":91,"title":"Black Motorbike","description":"Engine Type:Wet sump, Single Cylinder, Four Stroke, Two Valves, Air Cooled with SOHC (Single Over Head Cam) Chain Drive Bore & Stroke:47.0 x 49.5 MM","price":569,"discountPercentage":13.63,"rating":4.04,"stock":115,"brand":"METRO 70cc Motorcycle - MR70","category":"motorcycle","thumbnail":"https://i.dummyjson.com/data/products/91/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/91/1.jpg","https://i.dummyjson.com/data/products/91/2.jpg","https://i.dummyjson.com/data/products/91/3.jpg","https://i.dummyjson.com/data/products/91/4.jpg","https://i.dummyjson.com/data/products/91/thumbnail.jpg"]},{"id":92,"title":"HOT SALE IN EUROPE electric racing motorcycle","description":"HOT SALE IN EUROPE electric racing motorcycle electric motorcycle for sale adult electric motorcycles","price":920,"discountPercentage":14.4,"rating":4.19,"stock":22,"brand":"BRAVE BULL","category":"motorcycle","thumbnail":"https://i.dummyjson.com/data/products/92/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/92/1.jpg","https://i.dummyjson.com/data/products/92/2.jpg","https://i.dummyjson.com/data/products/92/3.jpg","https://i.dummyjson.com/data/products/92/4.jpg"]},{"id":93,"title":"Automatic Motor Gas Motorcycles","description":"150cc 4-Stroke Motorcycle Automatic Motor Gas Motorcycles Scooter motorcycles 150cc scooter","price":1050,"discountPercentage":3.34,"rating":4.84,"stock":127,"brand":"shock absorber","category":"motorcycle","thumbnail":"https://i.dummyjson.com/data/products/93/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/93/1.jpg","https://i.dummyjson.com/data/products/93/2.jpg","https://i.dummyjson.com/data/products/93/3.jpg","https://i.dummyjson.com/data/products/93/4.jpg","https://i.dummyjson.com/data/products/93/thumbnail.jpg"]},{"id":94,"title":"new arrivals Fashion motocross goggles","description":"new arrivals Fashion motocross goggles motorcycle motocross racing motorcycle","price":900,"discountPercentage":3.85,"rating":4.06,"stock":109,"brand":"JIEPOLLY","category":"motorcycle","thumbnail":"https://i.dummyjson.com/data/products/94/thumbnail.webp","images":["https://i.dummyjson.com/data/products/94/1.webp","https://i.dummyjson.com/data/products/94/2.jpg","https://i.dummyjson.com/data/products/94/3.jpg","https://i.dummyjson.com/data/products/94/thumbnail.webp"]},{"id":95,"title":"Wholesale cargo lashing Belt","description":"Wholesale cargo lashing Belt Tie Down end Ratchet strap customized strap 25mm motorcycle 1500kgs with rubber handle","price":930,"discountPercentage":17.67,"rating":4.21,"stock":144,"brand":"Xiangle","category":"motorcycle","thumbnail":"https://i.dummyjson.com/data/products/95/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/95/1.jpg","https://i.dummyjson.com/data/products/95/2.jpg","https://i.dummyjson.com/data/products/95/3.jpg","https://i.dummyjson.com/data/products/95/4.jpg","https://i.dummyjson.com/data/products/95/thumbnail.jpg"]},{"id":96,"title":"lighting ceiling kitchen","description":"Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern","price":30,"discountPercentage":14.89,"rating":4.83,"stock":96,"brand":"lightingbrilliance","category":"lighting","thumbnail":"https://i.dummyjson.com/data/products/96/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/96/1.jpg","https://i.dummyjson.com/data/products/96/2.jpg","https://i.dummyjson.com/data/products/96/3.jpg","https://i.dummyjson.com/data/products/96/4.jpg","https://i.dummyjson.com/data/products/96/thumbnail.jpg"]},{"id":97,"title":"Metal Ceramic Flower","description":"Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp","price":35,"discountPercentage":10.94,"rating":4.93,"stock":146,"brand":"Ifei Home","category":"lighting","thumbnail":"https://i.dummyjson.com/data/products/97/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/97/1.jpg","https://i.dummyjson.com/data/products/97/2.jpg","https://i.dummyjson.com/data/products/97/3.jpg","https://i.dummyjson.com/data/products/97/4.webp","https://i.dummyjson.com/data/products/97/thumbnail.jpg"]},{"id":98,"title":"3 lights lndenpant kitchen islang","description":"3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier","price":34,"discountPercentage":5.92,"rating":4.99,"stock":44,"brand":"DADAWU","category":"lighting","thumbnail":"https://i.dummyjson.com/data/products/98/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/98/1.jpg","https://i.dummyjson.com/data/products/98/2.jpg","https://i.dummyjson.com/data/products/98/3.jpg","https://i.dummyjson.com/data/products/98/4.jpg","https://i.dummyjson.com/data/products/98/thumbnail.jpg"]},{"id":99,"title":"American Vintage Wood Pendant Light","description":"American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante","price":46,"discountPercentage":8.84,"rating":4.32,"stock":138,"brand":"Ifei Home","category":"lighting","thumbnail":"https://i.dummyjson.com/data/products/99/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/99/1.jpg","https://i.dummyjson.com/data/products/99/2.jpg","https://i.dummyjson.com/data/products/99/3.jpg","https://i.dummyjson.com/data/products/99/4.jpg","https://i.dummyjson.com/data/products/99/thumbnail.jpg"]},{"id":100,"title":"Crystal chandelier maria theresa for 12 light","description":"Crystal chandelier maria theresa for 12 light","price":47,"discountPercentage":16,"rating":4.74,"stock":133,"brand":"YIOSI","category":"lighting","thumbnail":"https://i.dummyjson.com/data/products/100/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/100/1.jpg","https://i.dummyjson.com/data/products/100/2.jpg","https://i.dummyjson.com/data/products/100/3.jpg","https://i.dummyjson.com/data/products/100/thumbnail.jpg"]}],"total":100,"skip":0,"limit":100}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/assets/images/github_icon_128848.svg
const github_icon_128848_namespaceObject = __webpack_require__.p + "icons\\github_icon_128848.svg";
;// CONCATENATED MODULE: ./src/assets/images/rs_school_js.svg
const rs_school_js_namespaceObject = __webpack_require__.p + "icons\\rs_school_js.svg";
;// CONCATENATED MODULE: ./src/assets/images/small-mark.svg
const small_mark_namespaceObject = __webpack_require__.p + "icons\\small-mark.svg";
;// CONCATENATED MODULE: ./src/assets/images/big-mark.svg
const big_mark_namespaceObject = __webpack_require__.p + "icons\\big-mark.svg";
;// CONCATENATED MODULE: ./src/assets/images/cart.png
const cart_namespaceObject = __webpack_require__.p + "images\\cart.png";
;// CONCATENATED MODULE: ./src/assets/images/Shopping-Bag-PNG-Pic.png
const Shopping_Bag_PNG_Pic_namespaceObject = __webpack_require__.p + "images\\Shopping-Bag-PNG-Pic.png";
// EXTERNAL MODULE: ./src/components/header.ts
var header = __webpack_require__(199);
// EXTERNAL MODULE: ./src/components/basket/showDataInHeader.ts
var showDataInHeader = __webpack_require__(151);
// EXTERNAL MODULE: ./src/components/app.ts
var app = __webpack_require__(77);
// EXTERNAL MODULE: ./src/components/footer.ts
var footer = __webpack_require__(408);
;// CONCATENATED MODULE: ./src/index.js









(0,header/* renderHeader */.g)();
(0,showDataInHeader.showDataInHeader)();

var container = document.querySelector(".container");
var mainSection = document.createElement("main");
mainSection.classList.add("main");
container === null || container === void 0 ? void 0 : container.append(mainSection);
(0,app.renderNewPage)("main-page");
window.location.hash = "main-page";

(0,app.knowHashchange)();

(0,footer/* renderFooter */.x)();
})();

/******/ })()
;