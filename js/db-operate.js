"use strict";
// 泛型接口需要泛型类来实现
var MySQLDb = /** @class */ (function () {
    function MySQLDb() {
    }
    MySQLDb.prototype.add = function (info) {
        console.log(info);
        return true;
        //  throw new Error("Method not implemented.");
    };
    MySQLDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MySQLDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MySQLDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MySQLDb;
}());
var MSSQLDb = /** @class */ (function () {
    function MSSQLDb() {
    }
    MSSQLDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MSSQLDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MSSQLDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MSSQLDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MSSQLDb;
}());
var User2 = /** @class */ (function () {
    function User2(u) {
        this.name = u.name;
        this.pwd = u.pwd;
    }
    return User2;
}());
var u1 = new User2({ name: "King", pwd: "123" });
var mysql = new MySQLDb();
mysql.add(u1);
// console.log(u1);
