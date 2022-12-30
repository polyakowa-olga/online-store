export function checkValues() {
  const sliderContainers = document.getElementsByClassName("range-input");
  for (let i = 0; i < sliderContainers.length; i++) {
    const sliders: HTMLCollectionOf<HTMLInputElement> =
      sliderContainers[i].getElementsByTagName("input");
    for (let j = 0; j < sliders.length; j++) {
      const inp: HTMLInputElement = sliders[j];
      if (inp.type === "range") {
        inp.oninput = getValues;
        inp.oninput();
      }
    }
  }
}

function getValues() {
  const parent = this.parentNode;
  const slides = parent.getElementsByTagName("input");
  console.log(slides);
  let slide1 = parseInt(slides[0].value);
  let slide2 = parseInt(slides[1].value);
  if (slide1 > slide2) {
    const temp = slide2;
    slide2 = slide1;
    slide1 = temp;
  }

  const displayElement = parent.getElementsByClassName("values")[0];
  if (displayElement.closest("#fl-price")) {
    displayElement.innerHTML = `$${slide1}   ⟷   $${slide2}`;
  } else {
    displayElement.innerHTML = `${slide1}   ⟷   ${slide2}`;
  }
}
