define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Header = /** @class */ (function () {
        function Header() {
            var divObj = document.createElement('div');
            divObj.innerText = 'Header';
            document.body.appendChild(divObj);
        }
        return Header;
    }());
    exports.Header = Header;
    var Main = /** @class */ (function () {
        function Main() {
            var divObj = document.createElement('div');
            divObj.innerText = 'Main';
            document.body.appendChild(divObj);
        }
        return Main;
    }());
    exports.Main = Main;
    var Footer = /** @class */ (function () {
        function Footer() {
            var divObj = document.createElement('div');
            divObj.innerText = 'Footer';
            document.body.appendChild(divObj);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("demo", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = /** @class */ (function () {
        function Home() {
            new components_1.Header();
            new components_1.Main();
            new components_1.Footer();
        }
        return Home;
    }());
    exports.Home = Home;
});
