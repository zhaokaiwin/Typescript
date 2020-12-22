class Queue<T> {
  private arr = [];
  push(item: T) {
    return this.arr.push(item);
  }
  pop(): T {
    return this.arr.pop();
  }
}
// class 中的泛型
let queue = new Queue<number>();

queue.push(1);
console.log(queue.pop().toFixed());

let queue2 = new Queue<string>();

queue2.push('str');
console.log(queue2.pop().toLocaleUpperCase());

// interface 约束泛型
interface KeyWord<T, U> {
  key: T;
  value: U;
}

let kw1: KeyWord<string, number> = { key: 'str', value: 123 };
let kw2: KeyWord<number, string> = { key: 1, value: 'str' };
// Array自带泛型
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let arr3: Array<string> = ['a', 'b'];
// 函数的定义
let add = function (x: number, y: string): string {
  return x + y;
};

const func: (x: number, y: string) => string = add;

// interface来定义函数
interface Isum {
  (x: number, y: number): number;
}

function sum(x: number, y: number): number {
  return x + y;
}

let sum1: Isum = sum;
// 函数中的泛型

interface Istr<T> {
  (x: T, y: T): T;
}
function strfunc(x: string, y: string) {
  return x + y;
}
let str1: Istr<string> = strfunc;
