// 数组类型
let arr1: number[] = [1, 2, 3];
let arr2: (string | number)[] = ['1', 2, 3];
let arr3: undefined[] = [undefined];
type User = {
  name: string;
  age: number;
  gender: string;
};
const user: User[] = [
  {
    name: 'kaiwin',
    age: 20,
    gender: 'male',
  },
];
class Teacher {
  name: string;
  age: number;
}
const teacher: Teacher[] = [
  new Teacher(),
  {
    name: 'kaiwin',
    age: 25,
  },
];

// 元组 tuple
let replica: [string, string, number] = ['kai', 'win', 18];

// csv
const doctorKai: [string, string, number][] = [
  ['kaiwin', 'male', 16],
  ['jujly', 'female', 17],
  ['mary', 'female', 18],
];
