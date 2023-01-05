function drawBtnBox() {
  const btnBox = document.createElement("div");
  btnBox.classList.add("filter-btns");
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

  return btnBox;
}

export default drawBtnBox;
