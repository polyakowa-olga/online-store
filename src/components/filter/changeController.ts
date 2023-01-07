import { checkValues } from "./dualSlider";
import { showFilterItems } from "./showFilterItems";
import { resetFilters } from "./reset-button";
import { toggleFilters } from "./copy-button";
import { getDataFromQueryString } from "../queryString";

export function controllChanges() {
  const paramBox = document.querySelector(".filter-params");
  if (!paramBox)
    throw new Error('Error! Element with class "filter-params" not found!');

  paramBox.addEventListener("click", showFilterItems);

  const resetBTN = document.querySelector(".reset");
  if (!resetBTN)
    throw new Error('Error! Element with class "reset" not found!');
  resetBTN.addEventListener("click", resetFilters);

  const copyBTN = document.querySelector(".copy");
  if (!copyBTN) throw new Error('Error! Element with class "copy" not found!');
  copyBTN.addEventListener("click", toggleFilters);

  window.onload = checkValues;

  window.addEventListener("load", getDataFromQueryString);
}
