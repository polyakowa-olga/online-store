import { IProducts } from "../../item/item";
import { getFilterParam } from "./filterParam";
import drawCheckboxFilter from "./checkboxSection";
import drawRangeboxFilter from "./rangeboxSection";
import { checkValues } from "../dualSlider";
import drawBtnBox from "./buttonBox";
import { getInputValue } from "../drawFilters/checkbox";
import { getRangeValues } from "../listeners";

export function drawFilterSection(arr: IProducts[]) {
  const mainBox = document.getElementById("filter_container")!;

  mainBox.append(drawBtnBox());

  const paramBox = document.createElement("div");
  paramBox.classList.add("filter-params");
  mainBox.append(paramBox);

  const arrCategory = getFilterParam(arr, "category");
  drawCheckboxFilter(
    paramBox,
    "Category",
    "fl-category",
    "category",
    arrCategory
  );

  const arrBrand = getFilterParam(arr, "brand");
  drawCheckboxFilter(paramBox, "Brand", "fl-brand", "brand", arrBrand);

  drawRangeboxFilter(paramBox, "Price", "fl-price");
  drawRangeboxFilter(paramBox, "Stock", "fl-stock");

  window.onload = checkValues;
  paramBox.addEventListener("click", getInputValue);

  getRangeValues();
}
