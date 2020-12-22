class Person {
  name = 'Kaiwin';
  say() {
    return this.name;
  }
}
class Teacher extends Person {
  // 子类可以重写父类的方法和属性
  // 子类调用父类的属性 用 super
  //   name = 'Mary';
  say() {
    return 'Mary' + ' love ' + super.say();
  }
}
const dreamGuy = new Person();
console.log(dreamGuy.say());
const dreamGirl = new Teacher();
console.log(dreamGirl.say());
