import { IAmountItemsInCategory } from "./filterParam";

function drawCheckboxFilter(
  filterBox: HTMLElement,
  name: string,
  id: string,
  param: string,
  arr: IAmountItemsInCategory[]
) {
  const category = document.createElement("div");
  category.classList.add("category");
  category.classList.add("_filter-box");

  const categoryTitle = document.createElement("h3");
  categoryTitle.classList.add("filter-title");
  categoryTitle.textContent = `${name}`;
  category.append(categoryTitle);

  const categoryListWrapper = document.createElement("div");
  categoryListWrapper.classList.add("filter-list-wrapper");
  category.append(categoryListWrapper);

  const categoryList = document.createElement("div");
  categoryList.classList.add("filter-list");
  categoryList.id = `${id}`;
  categoryListWrapper.append(categoryList);

  filterBox.append(category);

  arr.forEach((el) => {
    const categoryListItem = document.createElement("div");
    categoryListItem.classList.add("filter-list__item");
    categoryList.append(categoryListItem);

    const categoryLabel = document.createElement("div");
    categoryLabel.classList.add("input-box");

    categoryListItem.append(categoryLabel);

    const maskInput = document.createElement("div");
    maskInput.classList.add("mark-input");
    categoryLabel.append(maskInput);

    const textInput = document.createElement("div");
    textInput.classList.add("text-input");
    textInput.textContent = `${el[0]}`;
    categoryLabel.append(textInput);

    const itemsAmount = document.createElement("span");
    itemsAmount.classList.add("items-amount");
    itemsAmount.textContent = `${el[1]}/${el[1]}`;
    categoryListItem.append(itemsAmount);

    categoryListItem.append(itemsAmount);
    categoryList.append(categoryListItem);
  });
}

export default drawCheckboxFilter;
