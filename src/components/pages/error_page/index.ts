import Page from "../../components/page";

class ErrorPage extends Page {

  constructor(id: string) {
    super(id);
  }

  renderError() {
    const message = document.createElement('div');
    message.textContent = "Error! The page was not found."
    return message;
  }

  render() {
    this.container.append(this.renderError());
    return this.container;
  }
}

export default ErrorPage;
