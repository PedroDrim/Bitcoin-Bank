"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("../model/list");
var person_1 = require("../model/person");
var _ = require("lodash");
var IndexRoute = (function () {
    function IndexRoute(router) {
        this.router = router;
        this.createList();
        this.routesForGET();
        this.routesForPOST();
        this.routesForPUT();
        this.routesForDELETE();
    }
    IndexRoute.prototype.createList = function () {
        this.list = new list_1.List();
        this.list.addPerson(new person_1.Person("111", "Joao", 1));
        this.list.addPerson(new person_1.Person("1325", "Maria", 10));
        this.list.addPerson(new person_1.Person("1564", "José", 25));
    };
    IndexRoute.prototype.routesForGET = function () {
        var _this = this;
        this.router.get("/", function (req, res) {
            var options = {
                "title": "Express",
                "list": _this.list.getList(),
                "name": "test"
            };
            var view = "index";
            res.render(view, { prop: options });
        });
    };
    IndexRoute.prototype.routesForPOST = function () {
        var _this = this;
        this.router.post("/", function (req, res) {
            if (_.isEmpty(req.body)) {
                res.status(400).send("Não foi possivel adicionar o elemento, verifique os parametros.");
            }
            else {
                var cpf = req.params.cpf;
                var person = new person_1.Person(req.body.cpf, req.body.name, req.body.age);
                _this.list.addPerson(person);
                res.send("Elemento adicionado com sucesso.");
            }
        });
        this.router.post("/:cpf", function (req, res) {
            var cpf = req.params.cpf;
            var person = _this.list.getPersonByCPF(cpf);
            if (_.isEmpty(person)) {
                res.status(400).send("Não foi possivel encontrar o elemento.");
            }
            else {
                res.json(person);
            }
        });
        this.router.post("/get/list", function (req, res) {
            var l = _this.list.getList();
            if (_.isEmpty(l)) {
                res.status(400).send("Lista vazia.");
            }
            else {
                res.json(l);
            }
        });
        this.router.post("/get/body", function (req, res) {
            res.send(JSON.stringify(req.body));
        });
    };
    IndexRoute.prototype.routesForPUT = function () {
        var _this = this;
        this.router.put("/:cpf", function (req, res) {
            if (_.isEmpty(req.body)) {
                res.status(400).send("Não foi possivel adicionar o elemento, verifique os parametros.");
            }
            else {
                var cpf = req.params.cpf;
                var person = new person_1.Person(req.body.cpf, req.body.name, req.body.age);
                if (_this.list.updatePersonByCPF(cpf, person)) {
                    res.send("Elemento atualizado com sucesso.");
                }
                else {
                    res.status(400).send("Não foi possivel atualizar o elemento, verifique os parametros.");
                }
            }
        });
    };
    IndexRoute.prototype.routesForDELETE = function () {
        var _this = this;
        this.router.delete("/:cpf", function (req, res) {
            var cpf = req.params.cpf;
            if (_this.list.removePersonByCPF(cpf)) {
                res.send("Elemento removido com sucesso.");
            }
            else {
                res.status(400).send("Não foi possivel remover o elemento, verifique os parametros.");
            }
        });
    };
    return IndexRoute;
}());
exports.IndexRoute = IndexRoute;
