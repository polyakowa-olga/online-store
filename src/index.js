import "./main.scss";

import github_icon_128848 from "./assets/images/github_icon_128848.svg";
import rs_school_js from "./assets/images/rs_school_js.svg";
import cart from "./assets/images/cart.png";
import logo from "./assets/images/novogodnjaja-jolka.png";

import { showProducts } from "./components/main/products";
showProducts();

import data from "./assets/data.json";
import { createFilterSection } from "./components/filter/index";
createFilterSection(data.products);
