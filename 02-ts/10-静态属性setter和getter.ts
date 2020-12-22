// 使用 getter setter 可以对私有变量进行保护和加密 而且外部访问到的也是进过加密的  ， 外部能访问到
// class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + ' must win';
//   }
//   set name(name: string) {
//     const realName = name.split(' ')[0];
//     this._name = realName;
//   }
// }
// const person = new Person('kaiwin');
// console.log(person.name);
// person.name = 'kaiwin zhao';
// console.log(person.name);

// 单例模式
// static 意思是 把方法直接挂载到类上，而不是类的实例上面
class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('Kaiwin');
    }
    return this.instance;
  }
}
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);
