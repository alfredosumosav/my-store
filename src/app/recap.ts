const username: string = 'alfredo';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,2);

// class Person {
//   age: number;
//   name: string;

//   constructor(age: number, name: string) {
//     this.age = age;
//     this.name = name;
//   }
// }

class Person {

  constructor(private age: number, public name: string) {
  }
}

const alfredo = new Person(15, 'alfredo');
alfredo.name;
