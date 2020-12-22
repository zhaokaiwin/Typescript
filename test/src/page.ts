interface Person {
  name: string;
  age: number;
  gender: string;
}
// T extends keyof Person 实际上是下面这三步
// type T = 'name'
// key:'name'
// Person['name']
// 也可以直接复制为一个字符串 而不是基础类型
/* type freedom = 'freedom';
let example: freedom = 'freedom'; */
class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}
const teacher = new Teacher({
  name: 'Kaiwin',
  age: 18,
  gender: 'male',
});
let kaiwinName = teacher.getInfo('name');
console.log(kaiwinName);
