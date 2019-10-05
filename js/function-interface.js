"use strict";
// 函数类型的接口是对传入函数参数和返回值的约束
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var md5 = function (key, value) {
    return key + value;
};
console.log(md5("King", "Dreamer"));
var arr = ['aaa', 'bbb'];
console.log(arr);
var usr = {
    name: "King",
};
console.log(usr);
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function (str) {
        console.log("eat:", str);
    };
    return Dog;
}());
var d = new Dog("Tom");
d.eat("Glass");
var HeiHei = /** @class */ (function (_super) {
    __extends(HeiHei, _super);
    function HeiHei() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeiHei.prototype.eat = function (str) {
        console.log("eat ->", str);
    };
    return HeiHei;
}(Dog));
var h = new HeiHei("heihei");
h.eat('rice');
