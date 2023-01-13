type attributesValue = string[][];

const InputAttributes = {
  priceInput_1: [
    ["value", "10"],
    ["min", "10"],
    ["max", "1749"],
    ["step", "1"],
    ["type", "range"],
  ],
  priceInput_2: [
    ["value", "1749"],
    ["min", "10"],
    ["max", "1749"],
    ["step", "1"],
    ["type", "range"],
  ],
  stockInput_1: [
    ["value", "1749"],
    ["min", "10"],
    ["max", "1749"],
    ["step", "1"],
    ["type", "range"],
  ],
  stockInput_2: [
    ["value", "1749"],
    ["min", "10"],
    ["max", "1749"],
    ["step", "1"],
    ["type", "range"],
  ],
};

const createInput = (values: attributesValue) => {
  const input = document.createElement("input");
  for (let i = 0; i < values.length; i++) {
    input.setAttribute(values[i][0], values[i][1]);
  }
  return input;
};

function drawRangeboxFilter(filterBox: HTMLElement, name: string, id: string) {
  const category = document.createElement("div");
  category.classList.add("category");
  category.classList.add("_filter-box");

  const drawTitle = () => {
    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("filter-title");
    categoryTitle.textContent = `${name}`;
    category.append(categoryTitle);
  };
  drawTitle();

  const drawRangebox = () => {
    const categoryList = document.createElement("div");
    categoryList.classList.add("filter-list");
    category.append(categoryList);

    const inputsBox = document.createElement("div");
    inputsBox.classList.add("range-input");
    inputsBox.id = `${id}`;
    categoryList.append(inputsBox);
    const values = document.createElement("span");
    values.classList.add("values");
    values.textContent =
      name === "Price" ? `$${0}   ⟷   $${1749}` : `${0}   ⟷   ${150}`;
    inputsBox.append(values);
    if (name === "Price") {
      const input_1 = createInput(InputAttributes.priceInput_1);
      inputsBox.append(input_1);

      const input_2 = createInput(InputAttributes.priceInput_2);
      inputsBox.append(input_2);
    }
    if (name === "Stock") {
      const input_1 = createInput(InputAttributes.stockInput_1);
      inputsBox.append(input_1);

      const input_2 = createInput(InputAttributes.stockInput_2);
      inputsBox.append(input_2);
    }

    filterBox.append(category);
  };
  drawRangebox();
}

export default drawRangeboxFilter;
