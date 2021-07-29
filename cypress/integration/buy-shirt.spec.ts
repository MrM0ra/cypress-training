import {
  MenuContentPage,
  ProductList,
  Login,
  ShippingStep,
  AddressStep,
  PaymentStep,
  ShoppingCart,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productList = new ProductList();
const login = new Login();
const shipping = new ShippingStep();
const address = new AddressStep();
const payment = new PaymentStep();
const shopping = new ShoppingCart();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productList.selectTShirt();
    productList.proceedToCheckout();
    shopping.proceedToCheckout();
    login.typeEmail();
    login.typePwd();
    login.signIn();
    address.proceedToCheckout();
    shipping.checkTermsAgreement();
    shipping.proceedToCheckout();
    payment.selectBank();
    payment.confirmOrder();
    payment.compare().should("have.text", "Your order on My Store is complete.");
  });
});
