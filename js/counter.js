"use strict";
function getCounter() {
    var counter = function (start) { };
    counter.interval = 23;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
