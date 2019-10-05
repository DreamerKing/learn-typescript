"use strict";
// 泛型
function getData(value) {
    return value;
}
console.log(getData(12));
console.log(getData("King"));
console.log(getData("Hello"));
// 泛型类
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (min > this.list[i]) {
                min = this.list[i];
            }
        }
        return min;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(12);
m.add(23);
m.add(2);
console.log(m.min());
var m2 = new MinClass();
m2.add("hhah");
m2.add("zkk");
console.log(m2.min());
function setData(value) {
    return value;
}
var mySetData = setData;
console.log(mySetData("King"));
