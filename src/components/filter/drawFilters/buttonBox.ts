function drawBtnBox() {
  const btnBox = document.createElement("div");
  btnBox.classList.add("filter-btns");

  const btnReset = document.createElement("button");
  btnReset.classList.add("btn", "filter-btn", "reset");
  btnReset.textContent = "Reset Filters";
  btnBox.append(btnReset);

  const btnCopy = document.createElement("button");
  btnCopy.classList.add("btn", "filter-btn", "copy");
  btnCopy.textContent = "Copy Link";

  const url = new URL(window.location.href);
  if (url.searchParams.has("copyLink")) {
    btnCopy.classList.add("save");
    btnCopy.textContent = "Return Filters";
  }
  btnBox.append(btnCopy);

  return btnBox;
}

export default drawBtnBox;
