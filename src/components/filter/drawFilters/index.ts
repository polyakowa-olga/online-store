import { IProducts } from "../../item/item";
import { getFilterParam } from "./filterParam";
import drawBtnBox from "./buttonBox";
import drawCheckboxFilter from "./checkboxSection";
import drawRangeboxFilter from "./rangeboxSection";

export function drawFilterSection(arr: IProducts[]) {
  const mainBox = document.getElementById("filter_container");
  if (!mainBox)
    throw new Error('Error! Element with class "filter_container" not found!');

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
}
