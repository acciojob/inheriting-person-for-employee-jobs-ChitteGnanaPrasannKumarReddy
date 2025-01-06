// complete this js code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}


function Employee(name, age, jobTitle) {
  Person.call(this, name, age); 
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype); 
Employee.prototype.constructor = Employee; 

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}

// Example usage
var alice = new Person("Alice", 25);
alice.greet(); // "Hello, my name is Alice and I am 25 years old."

var bob = new Employee("Bob", 30, "Manager");
bob.greet(); // "Hello, my name is Bob and I am 30 years old."
bob.jobGreet(); // "Hello, my name is Bob and I am 30 years old, and my job title is Manager."

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
