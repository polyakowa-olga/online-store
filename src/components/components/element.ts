abstract class Element {
  protected container: HTMLElement;
  constructor(tag: string, className: string) {
    this.container = document.createElement(tag);
    this.container.className = className;
  }

  render() {
    return this.container;
  }
}

export default Element;
