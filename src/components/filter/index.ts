import { IProducts } from "../item/item";
import { drawFilterSection } from "./drawFilters/index";


export function createFilterSection(arr: IProducts[]) {
  drawFilterSection(arr);


}
