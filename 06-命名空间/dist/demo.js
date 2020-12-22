"use strict";
// 命名空间的好处 就是给我们一个类似模块化开发的方式，把一组方法封装到一起，对外提供统一的接口  , 也减少了全局变量的定义
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Main();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
