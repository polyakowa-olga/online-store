import { IProducts } from "./item/item";

export function drawFilterSection(arr: IProducts[]) {
  drawBtnBox();
  const arrCategory = getFilterParam(arr, "category");
  drawCheckboxFilter("Category", "fl-category", "category", arrCategory);
  const arrBrand = getFilterParam(arr, "brand");
  drawCheckboxFilter("Brand", "fl-brand", "brand", arrBrand);
  drawCheckboxFilter("Price", "fl-price");
  drawCheckboxFilter("Stock", "fl-stock");

  function drawBtnBox(): void {
    const mainFilterBox = document.getElementById("filter_container");

    const btnBox = document.createElement("div");
    btnBox.classList.add("filter-btns");
    mainFilterBox?.append(btnBox);
    const btnReset = document.createElement("button");
    btnReset.classList.add("btn");
    btnReset.classList.add("filter-btn");
    btnReset.classList.add("reset");
    btnReset.textContent = "Reset Filters";
    btnBox.append(btnReset);
    const btnCopy = document.createElement("button");
    btnCopy.classList.add("btn");
    btnCopy.classList.add("filter-btn");
    btnCopy.classList.add("copy");
    btnCopy.textContent = "Copy Link";
    btnBox.append(btnCopy);
  }

  function drawCheckboxFilter(
    name: string,
    id: string,
    param?: string,
    arr?: [string, number][]
  ): void {
    const mainFilterBox = document.getElementById("filter_container");

    const paramBox = document.createElement("div");
    paramBox.classList.add("filter-params");

    mainFilterBox?.append(paramBox);

    const category = document.createElement("div");
    category.classList.add("category");
    category.classList.add("_filter-box");
    category.innerHTML = `
  <h3 class="filter-title">${name}</h3>
  <div class="filter-list" id=${id}>
  </div>
  `;
    paramBox.append(category);
    let filter_list = document.querySelector(`#${id}`);
    filter_list!.innerHTML = "";
    if (name === "Category" || name === "Brand") {
      arr.forEach((el) => {
        filter_list!.innerHTML += `
        <div class="filter-list__item">
<label class="input-box">${el[0]}
  <input type="checkbox" class="real-input">
  <span class="mask-input"></span>
</label>
  <span class="items-amount">(${el[1]}/${el[1]})</span>
</div>
`;
      });
    }
    if (name === "Price") {
      filter_list!.innerHTML = `
  <div class="range-input">
  <span class="values"></span>
  <input value="10" min="10" max="1749" step="1" type="range">
  <input value="1749" min="10" max="1749" step="1" type="range">
</div> 
  `;
    }
    if (name === "Stock") {
      filter_list!.innerHTML = `
  <div class="range-input">
  <span class="values"></span>
  <input value="2" min="2" max="150" step="1" type="range">
  <input value="150" min="2" max="150" step="1" type="range">
</div>
  `;
    }
  }

  function getFilterParam(arr: IProducts[], param: string): [string, number][] {
    const result: [string, number][] = [];
    let arrParams: string[] = [];

    arr.forEach((el) => {
      if (param === "category" || param === "brand") {
        arrParams.push(el[param]);
      }
    });

    let uniqParam = new Set(arrParams);

    uniqParam.forEach((el) => {
      let amount = 0;
      for (let i = 0; i < arr.length; i++) {
        if (param === "category" || param === "brand") {
          if (el === arr[i][param]) {
            amount++;
          }
        }
      }
      result.push([el, amount]);
    });

    return result;
  }
}


  export function filter(
    arr: IProducts[],
    param: string,
    value: string
  ): number[] {
    const result: number[] = [];
    arr.forEach((el) => {
      if (param === "category" || param === "brand") {
        if (el[param] === value) {
          result.push(el.id);
        }
      }
    });

    return result;
  }


