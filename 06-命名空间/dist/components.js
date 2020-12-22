"use strict";
var Components;
(function (Components) {
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
