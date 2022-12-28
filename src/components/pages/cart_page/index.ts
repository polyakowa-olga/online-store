import Page from "../../components/page";

class CartPage extends Page {
  constructor(id: string) {
    super(id);
  }
  renderCart() {
    const message = document.createElement('div');
    message.textContent = "Hi. I am your cart!"
    return message;
  }
  render() {
    const cart = this.renderCart();
    this.container.append(cart);
    return this.container;
  }
}

export default CartPage;
