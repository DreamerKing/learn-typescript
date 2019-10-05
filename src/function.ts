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

/*  // 默认参数 可以不用在函数体内单独处理
 function getInfo(name: string, age: number = 10):string {
     return `${name} ${age}`;
}

console.log(getInfo("King"));
console.log(getInfo("King", 20));
 */

/*  // 剩余参数 
 function sum(...rest:number[]): number{
    return rest.reduce((prev, curr) => prev + curr);
 }

 console.log(sum(1, 3, 6, 7)); */

 // 函数重载
 // js 中同名函数，前面的函数会被后面的函数覆盖
/* 
function getInfo(name: string): string;
function getInfo(age: number): number;

function getInfo(str: any): any {
    if(typeof str == "string") {
        return str;
    } else if(typeof str == "number"){
        return str;
    }
}

console.log(getInfo("King"));
console.log(getInfo(20)); */


// 箭头函数



 

