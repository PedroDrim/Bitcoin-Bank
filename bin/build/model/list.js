"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List = (function () {
    function List() {
        this.people = new Array();
    }
    List.prototype.addPerson = function (person) {
        this.people.push(person);
    };
    List.prototype.removePersonByCPF = function (cpf) {
        var index;
        for (index = 0; index < this.people.length; index++) {
            var person = this.people[index];
            var cpf_person = person.getCpf();
            if (cpf_person == cpf) {
                this.people.splice(index, 1);
                return (true);
            }
        }
        return (false);
    };
    List.prototype.getPersonByCPF = function (cpf) {
        var index;
        for (index = 0; index < this.people.length; index++) {
            var person = this.people[index];
            var cpf_person = person.getCpf();
            if (cpf_person == cpf) {
                return (person);
            }
        }
    };
    List.prototype.updatePersonByCPF = function (cpf, newPerson) {
        var index;
        for (index = 0; index < this.people.length; index++) {
            var person = this.people[index];
            var cpf_person = person.getCpf();
            if (cpf_person == cpf) {
                this.people[index] = newPerson;
                return (true);
            }
        }
        return (false);
    };
    List.prototype.getList = function () {
        return (this.people);
    };
    return List;
}());
exports.List = List;
