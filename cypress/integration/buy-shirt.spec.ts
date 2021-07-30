import {
  MenuContentPage,
  ProductList,
  Login,
  ShippingStep,
  AddressStep,
  PaymentStep,
  ShoppingCart,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productList: ProductList;
  let login: Login;
  let shipping: ShippingStep;
  let address: AddressStep;
  let payment: PaymentStep;
  let shopping: ShoppingCart;
  let userEmail: string;
  let userPassword: string;
  let paymentText: string;

  before(() => {
    menuContentPage = new MenuContentPage();
    productList = new ProductList();
    login = new Login();
    shipping = new ShippingStep();
    address = new AddressStep();
    payment = new PaymentStep();
    shopping = new ShoppingCart();
    userEmail = "aperdomobo@gmail.com";
    userPassword = "WorkshopProtractor";
    paymentText = "Your order on My Store is complete.";
  });

  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productList.selectTShirt();
    productList.proceedToCheckout();
    shopping.proceedToCheckout();
    login.signIn(userEmail, userPassword);
    address.proceedToCheckout();
    shipping.checkTermsAgreement();
    shipping.proceedToCheckout();
    payment.selectBank();
    payment.confirmOrder();
    payment.compare().should("have.text", paymentText);
  });
});
