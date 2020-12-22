// interface 并不能变成JavaScript的代码，它只是一个帮助我们语法校验的一个工具
interface Person {
  //  readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any;
  say(): string;
}
interface Teacher extends Person {
  teach(): string;
}
const getPersonName = (person: Teacher): void => {
  console.log(person.name);
};
const setPersonName = (person: Person, name: string): void => {
  person.name = name;
};
let person = {
  name: 'kai',
  sex: 'male',
  say() {
    return 'hello kaiwin';
  },
  teach() {
    return 'hello';
  },
};
getPersonName({
  name: 'kai',
  sex: 'male',
  say() {
    return 'hello World';
  },
  teach() {
    return 'hello';
  },
});
getPersonName(person);
setPersonName(person, 'win');

// 一个类 使用 接口时用 implements
class User implements Person {
  name = 'kai';
  say() {
    return 'hello';
  }
}
// interface定义函数
interface sayHi {
  (word: string): string;
}
const say: sayHi = (word: string) => {
  return word;
};
