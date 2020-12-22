// 基础类型 -> number string symbol void boolean null undefined
const number: number = 123;
const str: string = '123';
// 对象类型 -> 包括 数组  对象  类类型 函数类型
let arr: number[] = [1, 2, 3];

let obj: {
  x: number;
  y: string;
} = {
  x: 123,
  y: '123',
};
class Person {}

let person: Person = new Person();

let getNumber: () => number = () => 123;
