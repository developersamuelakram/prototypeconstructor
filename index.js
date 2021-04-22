// super type
function AllEmployees() {}

AllEmployees.prototype = {
  constructor: AllEmployees,
  attendance: function (string) {
    console.log(string);
  },
  bankAccount: function (bankname) {
    console.log(bankname);
  },
};

// child type
function Worker(name, dob, position) {
  this.name = name;
  this.dob = dob;
  this.position = position;
}

Worker.prototype = Object.create(AllEmployees.prototype);
Worker.prototype.constructor = Worker;
// worker one
let mark = new Worker("Mark", "27th Nov 1992", "Admin");
console.log(mark);
mark.bankAccount(mark.name + " has Scb Bank");
mark.attendance(mark.name + " has a good attendance");

// worker two

let ninja = new Worker("Ninja", "11th JAN 1992", "CEO");
console.log(ninja);
mark.bankAccount(ninja.name + " has BBL Bank");
mark.attendance(ninja.name + " has a bad attendance");
