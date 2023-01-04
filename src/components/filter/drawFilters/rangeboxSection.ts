function drawRangeboxFilter(
  filterBox: HTMLElement,
  name: string,
  id: string
) {
  const category = document.createElement("div");
  category.classList.add("category");
  category.classList.add("_filter-box");

  const categoryTitle = document.createElement("h3");
  categoryTitle.classList.add("filter-title");
  categoryTitle.textContent = `${name}`;
  category.append(categoryTitle);

  const categoryList = document.createElement("div");
  categoryList.classList.add("filter-list");
  category.append(categoryList);

  const inputsBox = document.createElement("div");
  inputsBox.classList.add("range-input");
  inputsBox.id = `${id}`;
  categoryList.append(inputsBox);

  const values = document.createElement("span");
  values.classList.add("values");
  inputsBox.append(values);

  if (name === "Price") {
    const input_1 = document.createElement("input");
    input_1.setAttribute('value', "10")
    input_1.setAttribute('min', "10")
    input_1.setAttribute('max', "1749")
    input_1.setAttribute('step', "1")
    input_1.setAttribute('type', "range")
    inputsBox.append(input_1);

    const input_2 = document.createElement("input");
    input_2.setAttribute('value', "1749")
    input_2.setAttribute('min', "10")
    input_2.setAttribute('max', "1749")
    input_2.setAttribute('step', "1")
    input_2.setAttribute('type', "range")
    inputsBox.append(input_2);
  }
  if (name === "Stock") {
    const input_1 = document.createElement("input");
    input_1.setAttribute('value', "2")
    input_1.setAttribute('min', "2")
    input_1.setAttribute('max', "150")
    input_1.setAttribute('step', "1")
    input_1.setAttribute('type', "range")
    inputsBox.append(input_1);

    const input_2 = document.createElement("input");
    input_2.setAttribute('value', "150")
    input_2.setAttribute('min', "2")
    input_2.setAttribute('max', "150")
    input_2.setAttribute('step', "1")
    input_2.setAttribute('type', "range")
    inputsBox.append(input_2);
  }
  filterBox.append(category);
}

export default drawRangeboxFilter;
