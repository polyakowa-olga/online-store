import './main.scss';

import github_icon_128848 from "./assets/images/github_icon_128848.svg";
import rs_school_js from "./assets/images/rs_school_js.svg";
import cart from "./assets/images/images.png";
import logo from "./assets/images/logo.jpg";

import { test } from "./exampl";
import { component } from "./components/item/item";

import data from "./assets/data.json";
import { filter } from "./components/filter.ts";
console.log(filter(data.products, "category", "laptops"));

// function component(text) {
//   const element = document.createElement("h1");
//   element.textContent = text;
//   return element;
// }

test("hello, TS файл работает");
component();
import { showProducts } from "./components/main/products";
showProducts();


// for (let i = 0; i <= data.products.length; i++) {
//   document.body.appendChild(component(data.products[i].title));
// }