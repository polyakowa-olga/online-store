function drawCheckboxFilter(
  filterBox: HTMLElement,
  name: string,
  id: string,
  param: string,
  arr: [string, number][]
) {
  const category = document.createElement("div");
  category.classList.add("category");
  category.classList.add("_filter-box");
  category.innerHTML = `
  <h3 class="filter-title">${name}</h3>
  <div class="filter-list-wrapper">
  <div class="filter-list" id=${id}>
  </div>
  </div>
  `;
  filterBox.append(category);
  const filter_list = document.querySelector(`#${id}`);
  filter_list!.innerHTML = "";

  arr.forEach((el) => {
    filter_list!.innerHTML += `
        <div class="filter-list__item">
<label class="input-box">${el[0]}
  <input type="checkbox" class="real-input" checked>
  <span class="mask-input"></span>
</label>
  <span class="items-amount">(${el[1]}/${el[1]})</span>
</div>
`;
  });
}

export default drawCheckboxFilter;
