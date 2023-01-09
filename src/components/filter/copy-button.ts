import { chooseParamsObj } from "./chooseParamsObj";
import { updateQueryString } from "../queryString";

export function toggleFilters(event: Event) {
  const ev = event.target;
  if ((<Element>ev).classList.contains("save")) {
    returnFilters();
  } else {
    copyFilters(<Element>ev);
  }
}

export function copyFilters(ev: Element) {
  chooseParamsObj.copy_link = document.location.search
    .substring(1)
    .replace(/=/g, "%3D")
    .replace(/&/g, "%26");
  console.log(chooseParamsObj.copy_link);
  ev.classList.add("save");
  ev.textContent = "Return Filters";
  updateQueryString(chooseParamsObj);
}

export function returnFilters() {
  if (chooseParamsObj.copy_link) {
    const temp = chooseParamsObj.copy_link
      .replace(/%3D/g, "=")
      .replace(/%26/g, "&");
    delete chooseParamsObj.copy_link;
    document.location.search = temp;
  }
}
