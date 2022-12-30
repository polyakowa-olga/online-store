
function drawRangeboxFilter(filterBox: HTMLElement, name: string, id: string): void {
    const paramBox = document.createElement("div");
    paramBox.classList.add("filter-params");

    filterBox?.append(paramBox);

    const category = document.createElement("div");
    category.classList.add("category");
    category.classList.add("_filter-box");
    category.innerHTML = `
    <h3 class="filter-title">${name}</h3>
    <div class="filter-list" id=${id}>
    </div>
    `;
    paramBox.append(category);
    const filter_list = document.querySelector(`#${id}`);
    filter_list!.innerHTML = "";

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

  export default drawRangeboxFilter;