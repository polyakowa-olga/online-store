import Page from "../../components/page";
import data from "../../.././assets/data.json";
import Filter from "../../components/filter"; 

class MainPage extends Page {
  constructor(id: string, ) {
    super(id);
  }

  render() {
    const filter = new Filter('div', "filter-container", data.products);
    const filterContainer = filter.render();
    this.container.append(filterContainer);

    return this.container;
  }
}

export default MainPage;
