"use strict";
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MySQLDb = /** @class */ (function () {
    function MySQLDb() {
    }
    MySQLDb.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    MySQLDb.prototype.update = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MySQLDb;
}());
var u = new User();
u.name = "King";
var db = new MySQLDb();
console.log(db.add(u));
