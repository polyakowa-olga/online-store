import { showFilterItems } from "./showFilterItems";

export const checkboxValues: string[] = [];

export function getInputValue(event: Event) {
  const ev = event.target as HTMLElement;
  if (ev.closest(".input-box")) {
    const nam = ev.closest(".input-box");

    if (!nam || !nam.lastChild)
      throw new Error('Error! Element with class "filter-params" not found!');
    const content = nam.lastChild.textContent as string;

    if (checkboxValues.includes(content)) {
      checkboxValues.splice(checkboxValues.indexOf(content));
      nam.childNodes.forEach((el) => {
        (<Element>el).classList.remove("active");
      });
    } else {
      checkboxValues.push(content);
      nam.childNodes.forEach((el) => {
        (<Element>el).classList.add("active");
      });
    }
  }
  console.log(checkboxValues);
  showFilterItems(["1", "2"]);
}
