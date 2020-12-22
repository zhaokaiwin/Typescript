"use strict";
var Components;
(function (Components) {
    var ChildComponent;
    (function (ChildComponent) {
        var ChildTest = /** @class */ (function () {
            function ChildTest() {
                var inputObj = document.createElement('input');
                inputObj.value = 'kaiwin';
                document.body.appendChild(inputObj);
            }
            return ChildTest;
        }());
        ChildComponent.ChildTest = ChildTest;
    })(ChildComponent = Components.ChildComponent || (Components.ChildComponent = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var divObj = document.createElement('div');
            divObj.innerText = 'Header';
            document.body.appendChild(divObj);
        }
        return Header;
    }());
    Components.Header = Header;
    var Main = /** @class */ (function () {
        function Main() {
            var divObj = document.createElement('div');
            divObj.innerText = 'Main';
            document.body.appendChild(divObj);
        }
        return Main;
    }());
    Components.Main = Main;
    var Footer = /** @class */ (function () {
        function Footer() {
            var divObj = document.createElement('div');
            divObj.innerText = 'Footer';
            document.body.appendChild(divObj);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
// console.log('kaiwin');
// class Header {
//   constructor() {
//     const divObj = document.createElement('div');
//     divObj.innerText = 'Header';
//     document.body.appendChild(divObj);
//   }
// }
// class Main {
//   constructor() {
//     const divObj = document.createElement('div');
//     divObj.innerText = 'Main';
//     document.body.appendChild(divObj);
//   }
// }
// class Footer {
//   constructor() {
//     const divObj = document.createElement('div');
//     divObj.innerText = 'Footer';
//     document.body.appendChild(divObj);
//   }
// }
// class Page {
//   constructor() {
//     new Header();
//     new Main();
//     new Footer();
//   }
// }
// 命名空间的好处 就是给我们一个类似模块化开发的方式，把一组方法封装到一起，对外提供统一的接口  , 也减少了全局变量的定义
/// <reference path="./components.ts" />
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            this.user = {
                name: 'kaiwin',
            };
            new Components.Header();
            new Components.Main();
            new Components.Footer();
            new Components.ChildComponent.ChildTest();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
console.log('kaiwin');
