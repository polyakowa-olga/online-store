import { IProducts } from "../item/item";

export function showNumberEachParam(params: IProducts[]) {
  const list = document.querySelectorAll(".items-amount");
  const categories = params.map((el) => el.category);
  const brandes = params.map((el) => el.brand);
  list.forEach((el) => {
    if (el.previousSibling?.childNodes[1]) {
      const labelInput = el.previousSibling?.childNodes[1].textContent;
      console.log(el.previousSibling?.childNodes[1].textContent);
      if (categories.includes(labelInput as string)) {
        const textBefore = el.textContent;
        el.textContent = `${
          categories.filter((i) => i === labelInput).length
        }${textBefore?.substring(1)}`;
      }
      if (brandes.includes(labelInput as string)) {
        const textBefore = el.textContent;
        el.textContent = `${
          brandes.filter((i) => i === labelInput).length
        }${textBefore?.substring(1)}`;
      }
    }
  });
}
