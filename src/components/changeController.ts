import { checkValues } from "./filter/dualSlider";
import { showFilterItems } from "./filter/showFilterItems";
import { resetFilters } from "./filter/reset-button";
import { toggleFilters } from "./filter/copy-button";
import { getDataFromQueryString } from "./queryString";
import { showNumberItems } from "./sort/showNumberItems";
import { addMethodSortToParamsObj } from "./sort/sortFoundItems";
//import { toggleRepresentaionProducts } from ".././representationProducts.ts/toggleRepresentation";
import { saveCart } from "./basket/saveCart";
import { getCart } from "./basket/saveCart";

export function controllChanges() {
  const paramBox = document.querySelector(".filter-params");
  if (!paramBox)
    throw new Error('Error! Element with class "filter-params" not found!');

  paramBox.addEventListener("click", showFilterItems);

  const resetBtn = document.querySelector(".reset");
  if (!resetBtn)
    throw new Error('Error! Element with class "reset" not found!');
  resetBtn.addEventListener("click", resetFilters);

  const copyBtn = document.querySelector(".copy");
  if (!copyBtn) throw new Error('Error! Element with class "copy" not found!');
  copyBtn.addEventListener("click", toggleFilters);

  window.addEventListener("DOMContentLoaded", () => {
    const optionBox = document.querySelector(".sort-bar-select");
    if (!optionBox)
      throw new Error('Error! Element with class "sort-bar-select" not found!');
    optionBox.addEventListener("click", addMethodSortToParamsObj);

    // const representaionProductsControllerBox =
    //   document.querySelector(".view-products");
    // if (!representaionProductsControllerBox)
    //   throw new Error('Error! Element with class "copy" not found!');
    // representaionProductsControllerBox.addEventListener(
    //   "click",
    //   toggleRepresentaionProducts
    // );
  });

  window.onload = checkValues;

  window.addEventListener("load", getDataFromQueryString);
  window.addEventListener("load", showNumberItems);
  window.addEventListener("load", getCart);
  window.addEventListener("unload", saveCart);
}
