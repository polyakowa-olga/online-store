import "./main.scss";

import github_icon_128848 from "./assets/images/github_icon_128848.svg";
import rs_school_js from "./assets/images/rs_school_js.svg";
import cart from "./assets/images/cart.png";
import logo from "./assets/images/novogodnjaja-jolka.png";

import { renderHeader } from "./components/header";
renderHeader();

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
