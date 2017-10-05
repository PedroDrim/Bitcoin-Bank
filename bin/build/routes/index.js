"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var route_Interface_1 = require("./route_Interface");
var IndexRoute = (function (_super) {
    __extends(IndexRoute, _super);
    function IndexRoute() {
        return _super.call(this) || this;
    }
    IndexRoute.create = function (router) {
        router.get("/", function (req, res, next) {
            new IndexRoute().index(req, res, next);
        });
        router.post("/test/:id", function (req, res, next) {
            new IndexRoute().index(req, res, next);
        });
    };
    IndexRoute.prototype.index = function (req, res, next) {
        var options = {
            "title": "Express",
            "name": "Contato, 3,2,1... foi"
        };
        this.render("index", req, res, options);
    };
    return IndexRoute;
}(route_Interface_1.BaseRoute));
exports.IndexRoute = IndexRoute;
