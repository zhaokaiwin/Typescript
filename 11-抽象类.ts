// 加了readonly 对 public属性就不能修改了
// class Person {
//   public readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const person = new Person('Kaiwin');
// person.name = 'zhangsan';
// console.log(person.name);

/******* 抽象类 *******/
/* abstract class Shape {
  width: number;
  getType() {
    return 'Grap';
  }
  abstract getArea(): number;
}
class Circle extends Shape {
  getArea() {
    return 123;
  }
}
class Square {}
class Triangle {} */

interface Person {
  name: string;
}
interface Teacher extends Person {
  age: number;
}
interface Student extends Person {
  teahcerAge: number;
}
interface Driver {
  name: string;
}
const teacher = {
  name: 'Dell Lee',
};
const student = {
  name: 'Kaiwin',
  age: 18,
};
const driver = {
  name: 'Mary',
};
const getUserInfo = (user: Person) => {
  console.log(user.name);
};
getUserInfo(teacher);
getUserInfo(student);
getUserInfo(driver);
