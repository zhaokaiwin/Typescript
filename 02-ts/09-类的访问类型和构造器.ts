// public protected private 三种访问类型
// public 允许我在类的内外被调用
// privete 允许在类内被使用
// protected  允许在类内及继承的子类中使用

/****************** public ********************* */
// class Person {
//   public name: string;
//   public say() {
//     console.log(this.name);
//   }
// }
// const boy = new Person();
// boy.name = 'Kaiwin';
// console.log(boy.name);
// boy.say();

/****************** private ********************* */

// class Person {
//   private name: string;
//   private say() {
//     console.log(this.name);
//   }
// }

// const boy = new Person();
// boy.name = 'Kaiwin';
// console.log(boy.name);
// boy.say();

/****************** protected ********************* */

// class Person {
//   protected name: string;
//   protected say() {
//     console.log(this.name);
//   }
// }
// class Teacher extends Person {
//   name = 'Kaiwin';
//   sayBay() {
//     console.log(this.name);
//   }
// }
// const teacher = new Teacher();
// teacher.sayBay();

/****************** constructor(构造器) ********************* */
// class Person {
//   // 传统写法
//   // 1 和 2 两句话相加就等于 public name:string
//   //   public name: string; // 1
//   //   constructor(name: string) {
//   //     this.name = name; // 2
//   //   }
//   // 简化写法
//   constructor(public name: string) {}
// }
// const person = new Person('kaiwin');
// console.log(person.name);

/****************** 子类继承父类 super()的使用场景 ********************* */
// class Person {
//   constructor(public name: string) {}
// }
// class Teacher extends Person {
//   constructor(public age: number) {
//     super('Kaiwin');
//   }
// }
// const teacher = new Teacher(18);
// console.log(teacher.name + teacher.age);
