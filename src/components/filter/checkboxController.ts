import { IChooseParams } from "./chooseParamsObj";

export function getInputValue(
  event: Event,
  param: string,
  filterParams: IChooseParams
) {
  const ev = event.target as HTMLElement;
  if (!ev.closest(".input-box")) return;

  const checkboxValues: string[] = [];
  const nam = ev.closest(".input-box");

  if (!nam || !nam.lastChild)
    throw new Error('Error! Element with class "filter-params" not found!');
  const content = nam.lastChild.textContent as string;
  if (param === "category" || param === "brand") {
    if (filterParams[param].includes(content)) {
      checkboxValues.push(content, "del");
      nam.childNodes.forEach((el) => {
        (<Element>el).classList.remove("active");
      });
    } else {
      checkboxValues.push(content, "add");
      nam.childNodes.forEach((el) => {
        (<Element>el).classList.add("active");
      });
    }
  }
  console.log(checkboxValues);
  return checkboxValues;
}
