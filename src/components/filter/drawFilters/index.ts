import { IProducts } from "../../item/item";
import { getFilterParam } from "./filterParam";
import drawBtnBox from "./buttonBox";
import drawCheckboxFilter from "./checkboxSection";
import drawRangeboxFilter from "./rangeboxSection";

const enum CategoryNames {
  category = "Category",
  brand = "Brand",
  price = "Price",
  stock = "Stock",
}

export const enum ParamId {
  category = "fl-category",
  brand = "fl-brand",
  price = "fl-price",
  stock = "fl-stock",
}

export const enum Params {
  category = "category",
  brand = "brand",
  price = "price",
  stock = "stock",
  copyLink = "copyLink",
  sort = "sort",
}

const drawCategories = (place: HTMLElement, arr: IProducts[]) => {
  const arrCategory = getFilterParam(arr, Params.category);
  drawCheckboxFilter(
    place,
    CategoryNames.category,
    ParamId.category,
    Params.category,
    arrCategory
  );
};

const drawBrands = (place: HTMLElement, arr: IProducts[]) => {
  const arrBrand = getFilterParam(arr, Params.brand);
  drawCheckboxFilter(
    place,
    CategoryNames.brand,
    ParamId.brand,
    Params.brand,
    arrBrand
  );
};

export function drawFilterSection(arr: IProducts[]) {
  const mainBox = document.getElementById("filter_container");
  if (!mainBox)
    throw new Error('Error! Element with class "filter_container" not found!');
  mainBox.append(drawBtnBox());
  const paramBox = document.createElement("div");
  paramBox.classList.add("filter-params");
  mainBox.append(paramBox);

  drawCategories(paramBox, arr);
  drawBrands(paramBox, arr);
  drawRangeboxFilter(paramBox, CategoryNames.price, ParamId.price);
  drawRangeboxFilter(paramBox, CategoryNames.stock, ParamId.stock);
}
