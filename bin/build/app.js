"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var path = require("path");
var helmet = require("helmet");
var compression = require("compression");
var favicon = require("serve-favicon");
var errorHandler = require("errorhandler");
var cors = require("cors");
var index_1 = require("./routes/index");
var reactView = require("express-react-views");
var busboy = require("connect-busboy");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    Server.getApplication = function () {
        return new Server().app;
    };
    Server.prototype.config = function () {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(logger("dev"));
        this.app.use(cookieParser());
        this.app.use(busboy());
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "jsx");
        this.app.engine('jsx', reactView.createEngine());
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
        var port = this.normalizePort(process.env.PORT || '3000');
        this.app.set('port', port);
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        new index_1.IndexRoute(router);
        this.app.use(router);
    };
    Server.prototype.api = function () {
        console.log("API's externas iniciadas");
    };
    Server.prototype.normalizePort = function (value) {
        var port = parseInt(value, 10);
        if (isNaN(port)) {
            return value;
        }
        if (port >= 0) {
            return port;
        }
    };
    return Server;
}());
exports.Server = Server;
