import IProducts from "./prodacts";
import Element from "./element";

class Filter  extends Element{
    arr:  IProducts[]

    constructor(tag: string, className: string, arr: IProducts[]) {
      super(tag, className);
      this.arr = arr;
    }

    drawBtnBox() {
      const btnBox = document.createElement("div");
      btnBox.classList.add("filter-btns");
      this.container.append(btnBox);

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
    }
  
    drawCheckboxFilter(
      name: string,
      id: string,
      param: string,
      arr: [string, number][],
      mainFilterBox: HTMLElement
    ): void {
      const paramBox = document.createElement("div");
      paramBox.classList.add("filter-params");
  
      mainFilterBox?.append(paramBox);
  
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
      paramBox.append(category);
      const filter_list = document.querySelector(`#${id}`);
      filter_list!.innerHTML = "";
  
      arr.forEach((el) => {
        filter_list!.innerHTML += `
          <div class="filter-list__item">
  <label class="input-box">${el[0]}
    <input type="checkbox" class="real-input">
    <span class="mask-input"></span>
  </label>
    <span class="items-amount">(${el[1]}/${el[1]})</span>
  </div>
  `;
      });
    }
  
    drawRangeboxFilter(name: string, id: string, mainFilterBox: HTMLElement): void {
      const paramBox = document.createElement("div");
      paramBox.classList.add("filter-params");
  
      mainFilterBox?.append(paramBox);
  
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
  
    getFilterParam(arr: IProducts[], param: string): [string, number][] {
      const result: [string, number][] = [];
      const arrParams: string[] = [];
  
      arr.forEach((el) => {
        if (param === "category" || param === "brand") {
          arrParams.push(el[param]);
        }
      });
  
      const uniqParam = new Set(arrParams);
  
      uniqParam.forEach((el) => {
        let amount = 0;
        for (let i = 0; i < arr.length; i++) {
          if (param === "category" || param === "brand") {
            if (el === arr[i][param]) {
              amount++;
            }
          }
        }
        result.push([el, amount]);
      });
  
      return result;
    }
  
//     getValues(): void {
//       const parent = this.parentNode;
//       const slides = parent.getElementsByTagName("input");
//       console.log(slides);
//       let slide1 = parseInt(slides[0].value);
//       let slide2 = parseInt(slides[1].value);
//       if (slide1 > slide2) {
//         const temp = slide2;
//         slide2 = slide1;
//         slide1 = temp;
//       }
  
//       const displayElement = parent.getElementsByClassName("values")[0];
//       if (displayElement.closest("#fl-price")) {
//         displayElement.innerHTML = `$${slide1}   ⟷   $${slide2}`;
//       } else {
//         displayElement.innerHTML = `${slide1}   ⟷   ${slide2}`;
//       }
//     }
  
    render() {
     
     //   document.getElementById("filter_container")!;

      this.drawBtnBox();
      // const arrCategory = this.getFilterParam(this.arr, "category");
      // this.drawCheckboxFilter("Category", "fl-category", "category", arrCategory, this.container);
      // const arrBrand = this.getFilterParam(this.arr, "brand");
      // this.drawCheckboxFilter("Brand", "fl-brand", "brand", arrBrand, this.container);
      // this.drawRangeboxFilter("Price", "fl-price", this.container);
      // this.drawRangeboxFilter("Stock", "fl-stock", this.container);
    
    //   window.onload = function (): void {
    //     const sliderContainers = document.getElementsByClassName("range-input");
    //     console.log(sliderContainers);
    //     for (let i = 0; i < sliderContainers.length; i++) {
    //       const sliders: HTMLCollectionOf<HTMLInputElement> =
    //         sliderContainers[i].getElementsByTagName("input");
    //       for (let j = 0; j < sliders.length; j++) {
    //         const inp: HTMLInputElement = sliders[j];
    //         if (inp.type === "range") {
    //           inp.oninput = getValues;
    //           inp.oninput();
    //         }
    //       }
    //     }
    //   };
    return this.container;
    }

  }
  
  export default Filter;
  