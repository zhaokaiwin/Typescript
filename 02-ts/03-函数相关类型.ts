// function replica(first: number, second: number): number {
//   return first + second;
// }
// replica(1, 2);
// void 是空    意思就是不能有返回值

// function breadth(): void {
//   console.log(123);
// }
// breadth();

// 解构赋值中的使用场景

// function encompass({
//   first,
//   second,
// }: {
//   first: number;
//   second: number;
// }): number {
//   return first + second;
// }

// encompass({ first: 1, second: 2 });

// function replica({ first }: { first: number }): string {
//   return first + '';
// }
// const breader = replica({ first: 1 });

// never
function errorEmitter(): never {
  //   while (true) {}
  throw new Error();
  console.log(123);
}
