// complete this js code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}


function Employee(name, age, jobTitle) {
  Person.call(this, name, age); 
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype); // Inherit from Person
Employee.prototype.constructor = Employee; // Set the constructor

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}


var alice = new Person("Alice", 25);
alice.greet(); 

var bob = new Employee("Bob", 30, "Manager");
bob.greet(); 
bob.jobGreet(); 

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
