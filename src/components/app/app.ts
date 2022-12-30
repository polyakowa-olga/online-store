import Page from ".././components/page";
import MainPage from ".././pages/main_page/index";
//import ProductPage from ".././pages/product_page/index";
import CartPage from ".././pages/cart_page/index";
import ErrorPage from ".././pages/error_page/index"; //, { ErrorTypes }
import Header from ".././components/header";

export const enum PageId {
  MainPage = "main-page",
  CartPage = "cart-page",
}

class App {
  private static container: HTMLElement = document.querySelector(".container")!;
  private static startPageID = "current-page";
  private startPage: MainPage;

  private header: Header;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.startPageID}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageId.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageId.CartPage) {
      page = new CartPage(idPage);
    } else {
      page = new ErrorPage(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.startPageID;
      App.container.append(pageHTML);
    }
  }

  private knowHashchange() {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.header = new Header("header", "header");
    this.startPage = new MainPage(PageId.MainPage);
  }

  run() {
    App.container.prepend(this.header.render());
    App.renderNewPage(App.startPageID);

    this.knowHashchange();
  }
}

export default App;
