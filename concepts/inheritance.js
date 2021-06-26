//Prototypal inheritance
let animal = {
  eat: true,
};

let rabbit = {
  jump: true,
};

rabbit.__proto__ = animal;

console.log(rabbit.eat);
// Object.keys only returns own keys
console.log(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit) console.log(prop); // jumps, then eats

//---------------------------------------------------------------------------
//Class Inheritance

class Animal {
  eat() {
    return true;
  }
}

class Rabbit extends Animal {
  jump() {
    return true;
  }
}

let rabbitinstance = new Rabbit();
console.log(rabbitinstance.eat());
