import { chooseParamsObj } from "./chooseParamsObj";

export function checkValues() {
  const sliderContainers = document.getElementsByClassName("range-input");
  for (let i = 0; i < sliderContainers.length; i++) {
    const sliders: HTMLCollectionOf<HTMLInputElement> =
      sliderContainers[i].getElementsByTagName("input");
    for (let j = 0; j < sliders.length; j++) {
      const inp: HTMLInputElement | null = sliders[j];
      if (inp.type === "range") {
        inp.addEventListener("input", getValues);
      }
    }
  }
}

export function getValues(this: ParentNode) {
  const parent = this.parentNode;
  if (parent) {
    const slides = parent.querySelectorAll("input");
    let slide1 = parseInt(slides[0].value);
    let slide2 = parseInt(slides[1].value);
    if (slide1 > slide2) {
      const temp = slide2;
      slide2 = slide1;
      slide1 = temp;
    }

    const displayElement = parent.querySelectorAll(".values")[0];
    if (displayElement.closest("#fl-price")) {
      displayElement.innerHTML = `$${slide1}   ⟷   $${slide2}`;
      chooseParamsObj.price = [];
      if (slide1 === 10 && slide2 === 1749) chooseParamsObj.price = [];
      else chooseParamsObj.price.push(slide1, slide2);
    } else {
      displayElement.innerHTML = `${slide1}   ⟷   ${slide2}`;
      chooseParamsObj.stock = [];
      if (slide1 === 2 && slide2 === 150) chooseParamsObj.stock = [];
      else chooseParamsObj.stock.push(slide1, slide2);
    }
  }
}
