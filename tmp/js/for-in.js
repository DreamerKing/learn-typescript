var student = {
    name: "Dreamer",
    age: 23
};
for (var key in student) {
    console.log(key, student[key]);
}
var greet = function (name) {
    if (name) {
        return "Hi " + name + "!";
    }
    else {
        return 'Hi!';
    }
};
console.log(greet(student.name));
function sum(a, b, callback) {
    callback(a + b);
}
sum(23, 18, function (result) {
    console.log("sum: " + result);
});
