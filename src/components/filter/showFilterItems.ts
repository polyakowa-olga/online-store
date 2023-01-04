export function showFilterItems(params: string[]) {
  const productItems = document.querySelectorAll(".block-element");
  productItems.forEach((el) => {
    const id = el.getAttribute("id") as string;
    if (!params.includes(id)) {
      el.classList.add("hide");
    }
  });
}
