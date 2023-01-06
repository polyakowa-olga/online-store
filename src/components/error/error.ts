export function showError() {
  const sumBox = document.createElement("span");
  sumBox.classList.add("header__sum-box");
  sumBox.textContent = "Errror. Page not found";
  sumBox.style.fontSize = "40px";
  sumBox.style.color = "red";
  sumBox.style.width = "100%";
  return sumBox;
}
