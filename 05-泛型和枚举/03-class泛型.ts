// class dataManage {
//   constructor(private data: (number | string)[]) {}
//   getData(index: number): string | number {
//     console.log(this.data[index]);
//     return this.data[index];
//   }
// }
// let data = new dataManage([123, 'abc']);
// data.getData(1);

// 类中的泛型
// class dataManage<T> {
//   constructor(private data: T[]) {}
//   getData(index): T {
//     return this.data[index];
//   }
// }

// let data = new dataManage<string | number>([123, '123']);

// 指定泛型中的具有的属性
// interface Item {
//   name: string;
// }
// class dataManage<T extends Item> {
//   constructor(private data: T[]) {}
//   getData(index): string {
//     return this.data[index].name;
//   }
// }

// let data = new dataManage([
//   {
//     name: 'kaiwin',
//   },
// ]);
// console.log(data.getData(0));

// 指定泛型为number | string
// 也就是让泛型继承 基础类型 这样就不能 就成Item 接口了
class dataManage<T extends number | string> {
  constructor(private data: T[]) {}
  getData(index): T {
    return this.data[index];
  }
}
let data = new dataManage(['a', 1]);
data.getData(1);
console.log(data.getData(1));
interface Item {
  name: string;
}
enum num {
  one,
  two,
  three,
}
console.log(num[1]);
console.log(num.two);

// 如何使用泛型作为一个具体类型注解
// 函数中的泛型使用
let fun: <T>(a) => T = <T>(a: T) => {
  return a;
};

// 拆解
function hello<T>(param: T) {
  return param;
}
let fun1: <T>(param: T) => T = hello;
