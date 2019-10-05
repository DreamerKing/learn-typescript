"use strict";
console.log(greetName("King"));
// console.log(greetUnname("King Dreamer"));
function greetName(name) {
    if (name)
        return name;
}
var greetUnname = function (name) {
    return name;
};
console.log(greetUnname("King Dreamer"));
