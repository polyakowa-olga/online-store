import { checkValues } from "./dualSlider";
import { showFilterItems } from "./showFilterItems";

export function controllChanges() {
  const paramBox = document.querySelector(".filter-params");
  if (!paramBox)
    throw new Error('Error! Element with class "filter-params" not found!');

  paramBox.addEventListener("click", showFilterItems);

  window.onload = checkValues;
}
