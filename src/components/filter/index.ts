import { IProducts } from "../item/item";
import { drawFilterSection } from "./drawFilters/index";
import { controllChanges } from "../changeController";

export function createFilterSection(arr: IProducts[]) {
  drawFilterSection(arr);
  controllChanges();
}
