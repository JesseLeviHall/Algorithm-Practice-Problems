/*
ES 2015 class syntax is syntactical sugar.
creating a new object must be called constructor.
the class keyword creates a constant, so you can not redefine it.
the syntax:
class Student {
  constructor (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times. `;
  }
  static enrollStudents(...students){
    //maybe send and email here
    return "enrolling students..."
  }
}
-class defined the pattern, new creates the object.
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("blue", "Steele");

Instance Methods: ex: markLate() method that acts on a single instance of the constructed object. 

Class Methods: keyword 'static' ex: enrollStudents, define methods pertinent to classes rather than instance objects of the class.
*/
