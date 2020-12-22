// 命名空间的好处 就是给我们一个类似模块化开发的方式，把一组方法封装到一起，对外提供统一的接口  , 也减少了全局变量的定义
/// <reference path="./components.ts" />

namespace Home {
  export class Page {
    user: Components.User = {
      name: 'kaiwin',
    };
    constructor() {
      new Components.Header();
      new Components.Main();
      new Components.Footer();
      new Components.ChildComponent.ChildTest();
    }
  }
}
console.log('kaiwin');
