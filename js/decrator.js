"use strict";
// class decrator
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function log(params) {
    return function (target) {
        console.log(target);
        console.log(params);
        target.prototype.aipUrl = params;
    };
    /* console.log(params);
    params.prototype.baseUrl = "/";
    params.prototype.run = function(){
        console.log("decrator run()");
    } */
}
function log2(target) {
    console.log(target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = "decrator apiUrl";
            return _this;
        }
        class_1.prototype.getData = function () {
            this.apiUrl = this.apiUrl + "....";
            console.log(this.apiUrl);
        };
        return class_1;
    }(target));
}
function logProperty(params) {
    return function (target, attr) {
        // console.log(target);
        // console.log(attr); 
        // console.log(params);
        target[attr] = params;
    };
}
function logMethod(params) {
    return function (target, methodName, description) {
        console.log(params, ">>");
        console.log(target);
        console.log(methodName);
        console.log(description);
        target.apiUrl = 'xxxx';
        target.run = function () {
            console.log("run");
        };
        var oldMethod = target[methodName];
        target[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            // console.log(args);
            oldMethod.apply(this, args);
        };
    };
}
function logParams(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params, target, methodName, paramsIndex);
        target.apiUrl = params;
    };
}
// @log2
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        this.apiUrl = "constructor apiUrl";
    }
    HttpClient.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log(this.apiUrl);
    };
    HttpClient.prototype.get = function (uuid) {
        console.log("get");
        console.log(uuid);
    };
    __decorate([
        logProperty("hello")
    ], HttpClient.prototype, "apiUrl", void 0);
    __decorate([
        logMethod('http://localhost')
    ], HttpClient.prototype, "getData", null);
    __decorate([
        __param(0, logParams('uuid'))
    ], HttpClient.prototype, "get", null);
    return HttpClient;
}());
var http = new HttpClient();
http.get(12);
console.log(http.apiUrl);
// http.getData(123, "King");
// http.run();
// console.log(">>", http.aipUrl);
// 属性  方法 类
