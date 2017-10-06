"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person(cpf, name, age) {
        this.name = name;
        this.age = age;
        this.cpf = cpf;
    }
    Person.prototype.getName = function () {
        return (this.name);
    };
    Person.prototype.getAge = function () {
        return (this.age);
    };
    Person.prototype.getCpf = function () {
        return (this.cpf);
    };
    return Person;
}());
exports.Person = Person;
