"use strict";
// 可选参数 必须要在函数体里处理可选参数
/* function getInfo(name: string, age?: number):string {
    if(age){
        return `${name} ${age}`;
    } else {
        return `${name}`;
    }
}

console.log(getInfo("King"));
console.log(getInfo("King", 20));
 */
// 内联注解
var overload2 = function (foo) { return foo; };
function sOrN(foo) {
    if (typeof foo === 'number') {
        return foo * foo;
    }
    else if (typeof foo === 'string') {
        return "Hello " + foo;
    }
}
var overload = sOrN;
var str = overload('Dreamer');
var num = overload(12);
console.log(str, num);
var str2 = overload2('King');
var num2 = overload2(23);
// const b = overload2( true);
// console.log(str2, num2, b);
// 箭头函数类型注解 只能作为简单的函数类型使用，无法使用重载
var simple = function (foo) { return String(foo); };
console.log(simple(23));
var bar3 = new Foo();
console.log(bar3);
