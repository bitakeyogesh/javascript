/**
 * Customer Class
 */
class Customer {
  constructor(balance = 0) {
    this.balance = balance;
    this.foodItems = [];
  }

  buy(food) {
    if (food.price() < this.balance) {
      this.balance -= food.price();
      this.foodItems.push(food);
      food.order();
    } else {
      console.log("not enough wallet balance..");
    }
  }
}

/**
 * Sandwich Class
 */
class Sandwich {
  constructor(type, basePrice) {
    this.type = type;
    this.basePrice = basePrice;
  }
  price() {
    return this.basePrice;
  }
  order() {
    console.log(`You ordered a ${this.type} sandwich for $ ${this.price()}.`);
  }
}

/**
 * DeluxeSandwich Class
 */
class DeluxeSandwich extends Sandwich {
  baseSandwich;
  constructor(baseSandwich) {
    super();
    this.baseSandwich = baseSandwich;
    this.type = `Deluxe ${baseSandwich.type}`;
  }
  price() {
    return this.baseSandwich.price() + 1.75;
  }
}

/**
 * DeluxeSandwich Class
 */
class ExquisiteSandwich extends Sandwich {
  baseSandwich;
  constructor(baseSandwich) {
    super();
    this.baseSandwich = baseSandwich;
    this.type = `Exquisite ${baseSandwich.type}`;
  }
  price() {
    return this.baseSandwich.price() + 10.75;
  }
}

//-------------------------------------------------------
// Test the design pattern
let customer = new Customer(25);

let turkeySandwich = new Sandwich("Turkey", 6.5);
let bltSandwich = new Sandwich("BLT", 7.55);

let deluxeBltSandwich = new DeluxeSandwich(bltSandwich);
let exquisiteTurkeySandwich = new ExquisiteSandwich(turkeySandwich);

customer.buy(exquisiteTurkeySandwich);
customer.buy(turkeySandwich);
customer.buy(deluxeBltSandwich);
