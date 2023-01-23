class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Teacher extends Person {
    constructor(name) {
      super(name);
    }
  
    teach(subject) {
      console.log(`${this.name} is now teaching ${subject}`);
    }
  }
  
  let teacher = new Teacher("Amit Kumar");
  teacher.teach("Math");
  