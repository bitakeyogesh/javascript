/**
 * PaymentMethodStrategy Class
 */
class PaymentMethodStrategy {
  static Bitcoin(customerInfo) {
    const { email, accountNumber } = customerInfo;
    // do stuff to get payment
    console.log("navigating to bitcoin payment gateway");
  }

  static CreditCard(customerInfo) {
    const { email, name, cardNumber } = customerInfo;
    // do stuff to get payment
    console.log("navigating to credit card payment gateway");
  }

  static UPI(customerInfo) {
    const { name, upiId } = customerInfo;
    // do stuff to get payment
    console.log("navigating to UPI payment gateway");
  }
}

/**
 * Checkout Class
 */
class Checkout {
  constructor(strategy = "UPI") {
    this.strategy = PaymentMethodStrategy[strategy];
  }

  changeStrategy(newStrategy) {
    this.strategy = PaymentMethodStrategy[newStrategy];
  }

  postPayment(customerInfo) {
    this.strategy(customerInfo);
  }
}

//---------------------------------------------------------
// Test the design pattern

let customerInfo = {
  name: "abc",
  mail: "abc@gmail.com",
  cardNumber: "326864823648732",
};

let checkout = new Checkout("CreditCard");
checkout.postPayment(customerInfo);

checkout.changeStrategy("UPI");
checkout.postPayment(customerInfo);
