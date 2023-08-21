'use strict';
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
const levi = new Person(`Levi`, 1998);
console.log(levi);

// 1. New obj created
// 2. Function is called, this = new obj
// 3. new obj linked to prototype
// 4. function automatically return the new obj

const matilda = new Person(`Matilda`, 2017);
const jack = new Person(`Jack`, 1975);
console.log(matilda, jack);

// const jay = `Jay`;
console.log(levi instanceof Person);
// console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

levi.calcAge();
matilda.calcAge();

console.log(levi.__proto__);
console.log(levi.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(levi));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(levi);

Person.prototype.species = `Homo Sapiens`;
console.log(levi, matilda);
console.log(levi.species);

console.log(levi.hasOwnProperty(`firstName`));
console.log(levi.hasOwnProperty(`species`));

console.log(levi.__proto__);
// Object.prototype (top of the Prototype Chain)
console.log(levi.__proto__.__proto__);
console.log(levi.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector(`h1`);
console.dir(x => x + 1);
*/
/*
///////////////////////// Coding Challenge 1://///////////////////////
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const BMW = new Car(`BMW`, 120);
const Mercedes = new Car(`Mercedes`, 95);

console.log(BMW);
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.accelerate();
*/

// class expression
// const PersonCl1 = class {};

/*
// class declaration
class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //   // Methods will be added to .prototype property
  //   calcAge() {
  //     console.log(2037 - this.birthYear);
  //   }

  //   greet() {
  //     console.log(`Hey ${this.firstName}`);
  //   }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl2(`Jessica Davis`, 1996);
console.log(jessica);
// jessica.calcAge();
console.log(jessica.age);
console.log(jessica.fullName);

console.log(jessica.__proto__ === PersonCl2.prototype);

// PersonCl2.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl2(`Walter White`, 1965);

const account = {
  owner: `Jonas`,
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

/*
// Constructor Function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// const jonas = new Person(`Jonas`, 1991);

Person.hey = function () {
  console.log(`Hey there 👋`);
  console.log(this);
};
Person.hey();
// jonas.hey();

// Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  static hey() {
    console.log(`Hey there 👋`);
    console.log(this);
  }
}

PersonCl.hey();

// console.log(Array.from(document.querySelectorAll(`h1`)));
// [1, 2, 3].from();
console.log(Number.parseFloat(`12c`));
*/

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = `Steven`;
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init(`Sarah`, 1979);
sarah.calcAge();
*/

////////////////// Coding Challenge 2/////////////////////////
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const BMW = new Car(`BMW`, 120);
const Mercedes = new Car(`Mercedes`, 95);

console.log(BMW);
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.accelerate();
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl(`Ford`, 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

/////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student(`Mike`, 2020, `Computer Science`);
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

////////////////// Coding Challenge 3 /////////////////////////
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV(`Tesla`, 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

// class EV {
//   constructor(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
//   }

//   set chargeBattery(chargeTo) {
//     this.charge += chargeTo;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(
//       `The ${this.make} is going ${this.speed}km/h, with a charge of ${this.charge}%`
//     );
//   }

//   brake() {
//     this.speed -= 10;
//     console.log(
//       `The ${this.make} is going ${this.speed}km/h, with a charge of ${this.charge}%`
//     );
//   }
// }

// const tesla = new EV(`Tesla`, 120, 23);

// tesla.chargeBattery = 27;
// console.log(tesla);

// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// console.log(tesla.speed, tesla.charge);
// tesla.brake();
// tesla.brake();
