"use strict";
/* function foo(){
    console.log("bar:", bar);
    var bar: number;
    bar = 9;
    console.log("bar:", bar);
}
foo(); */
/* function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
} */
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
console.log(sumMatrix([[12, 23], [1, 6]]));
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
var f = theCityThatAlwaysSleeps();
console.log(f);
var user2 = {
    name: "King",
    age: 20
};
var n = user2.name, age = user2.age;
console.log(n, age);
function fn(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.a, a = _c === void 0 ? "" : _c, _d = _b.b, b = _d === void 0 ? 0 : _d;
    console.log(a, b);
}
fn();
fn({ a: "a2" });
