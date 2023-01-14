export function renderFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = `
    <div class="year">2022</div>
    <a class="link" href="https://github.com/KOSHAK2008">
      <img class="icon github-icon" src="./icons/github_icon_128848.svg" alt="github_ico">
    </a>
    <a class="link" href="https://github.com/polyakowa-olga">
      <img class="icon github-icon" src="./icons/github_icon_128848.svg" alt="github_ico">
    </a>
    <a class="link" href="https://rs.school/js/">
      <img class="icon RSS-icon" src="./icons/rs_school_js.svg" alt="RSS_ico">
    </a>
    `;
  const mainContainer = document.querySelector(".container");
  mainContainer?.append(footer);
}
