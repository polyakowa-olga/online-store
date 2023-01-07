import { checkValues } from "./dualSlider";
import { showFilterItems } from "./showFilterItems";
import { resetFilters } from "./reset-button";
import { getDataFromQueryString } from "../queryString";

export function controllChanges() {
  const paramBox = document.querySelector(".filter-params");
  if (!paramBox)
    throw new Error('Error! Element with class "filter-params" not found!');

  paramBox.addEventListener("click", showFilterItems);

  const reset = document.querySelector(".reset");
  if (!reset) throw new Error('Error! Element with class "reset" not found!');

  reset.addEventListener("click", resetFilters);

  window.onload = checkValues;

  window.addEventListener("load", getDataFromQueryString);
}
