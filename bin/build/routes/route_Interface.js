"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseRoute = (function () {
    function BaseRoute() {
        this.title = "Tour of Heros";
        this.scripts = [];
    }
    BaseRoute.prototype.addScript = function (src) {
        this.scripts.push(src);
        return this;
    };
    BaseRoute.prototype.render = function (view, req, res, options) {
        res.locals.BASE_URL = "/";
        res.locals.scripts = this.scripts;
        res.locals.title = this.title;
        res.render(view, options);
    };
    return BaseRoute;
}());
exports.BaseRoute = BaseRoute;
