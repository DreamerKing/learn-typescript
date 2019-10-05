"use strict";
var greetUnname = function (name) {
    return "Hi " + name;
};
console.log(greetUnname("King Dreamer"));
// 可选参数
function add(one, two, three) {
    if (three) {
        return one + two + three;
    }
    return one + two;
}
console.log(add(1, 2, 3));
console.log(add(1, 2));
// console.log(add(4));
// 默认参数
function add2(one, two, three) {
    if (two === void 0) { two = 0; }
    if (three === void 0) { three = 0; }
    return one + two + three;
}
console.log(add2(1, 2, 3));
console.log(add2(1, 2));
console.log(add2(4));
// 剩余参数
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    var len = numbers.length;
    while (len--) {
        result += numbers[len];
    }
    return result;
}
function sum2(numbers) {
    var result = 0;
    var len = numbers.length;
    while (len--) {
        result += numbers[len];
    }
    return result;
}
function sum3() {
    var result = 0;
    var len = arguments.length;
    while (len--) {
        result += arguments[len];
    }
    return result;
}
console.log("++++++++++++++++++++++++");
console.log(sum2([1, 2, 5]));
console.log(sum2([5]));
console.log(sum2([1, 2]));
console.log(sum2([]));
console.log("++++++++++++++++++++++++");
console.log(sum3(1, 2, 5));
console.log(sum3(2));
console.log(sum3(5, 6));
