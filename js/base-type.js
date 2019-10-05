"use strict";
// 数组
var list = [12, 23, 45];
console.log(list);
var list2 = [12, 34, 32];
console.log(list2);
// 元组
var t = ["King", 20];
console.log(t);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// any
var notSure = 23;
notSure = "kkk";
console.log(notSure);
// void 
// void类型像是与any类型相反，它表示没有任何类型
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
function showName(name) {
    console.log(name);
}
var sn = showName("King");
console.log(sn);
// null/undefined
// 默认情况下null和undefined是所有类型的子类型
// never never类型表示的是那些永不存在的值的类型。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: "King" });
create(null);
// create(12);
// 类型推断 
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。
// 第一种 尖括号语法
var someValue = "this is a string";
var strLength = someValue.length;
// 第二种 as语法
var someValue2 = "this is a string";
var strLength2 = someValue.length;
