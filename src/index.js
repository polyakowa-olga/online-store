import "./main.scss";

import github_icon_128848 from "./assets/images/github_icon_128848.svg";
import rs_school_js from "./assets/images/rs_school_js.svg";
import smallImg from "./assets/images/small-mark.svg";
import bigImg from "./assets/images/big-mark.svg";
import cart from "./assets/images/cart.png";
import logo from "./assets/images/Shopping-Bag-PNG-Pic.png";


import { renderHeader } from "./components/header";
import { showDataInHeader } from "./components/basket/showDataInHeader";
renderHeader();
showDataInHeader();
import { renderNewPage } from "./components/app";
const container = document.querySelector(".container");
const mainSection = document.createElement("main");
mainSection.classList.add("main");
container?.append(mainSection);
renderNewPage("main-page");
window.location.hash = "main-page";

import { knowHashchange } from "./components/app";
knowHashchange();

import { renderFooter } from "./components/footer";
renderFooter();
