import { IProducts } from "../../item/item";
import { getFilterParam } from "./filterParam";
import drawCheckboxFilter from "./checkboxSection";
import drawRangeboxFilter from "./rangeboxSection";
import { checkValues } from "../dualSlider";
import drawBtnBox from "./buttonBox";



export function drawFilterSection(arr: IProducts[]) {
  const mainBox = document.getElementById("filter_container")!;
  mainBox.append(drawBtnBox());

  const arrCategory = getFilterParam(arr, "category");
  drawCheckboxFilter(mainBox, "Category", "fl-category", "category", arrCategory);

  const arrBrand = getFilterParam(arr, "brand");
  drawCheckboxFilter(mainBox, "Brand", "fl-brand", "brand", arrBrand);

  drawRangeboxFilter(mainBox, "Price", "fl-price");
  drawRangeboxFilter(mainBox, "Stock", "fl-stock");

  window.onload = checkValues;

}

