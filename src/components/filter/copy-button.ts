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
  chooseParamsObj.copyLink = document.location.search
    .substring(1)
    .replace(/=/g, "%3D")
    .replace(/&/g, "%26");
  console.log(chooseParamsObj.copyLink);
  ev.classList.add("save");
  ev.textContent = "Return Filters";
  updateQueryString(chooseParamsObj);
}

export function returnFilters() {
  if (chooseParamsObj.copyLink) {
    const temp = chooseParamsObj.copyLink
      .replace(/%3D/g, "=")
      .replace(/%26/g, "&");
    delete chooseParamsObj.copyLink;
    document.location.search = temp;
  }
}
