//==============================================
// Iniciando imports para o typescript
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as path from "path";
import * as methodOverride from "method-override";
import * as favicon from "serve-favicon";
import * as errorHandler from "errorhandler";
import { IndexRoute } from "./routes/index";
// Import de Bibliotecas em javascript
var reactView = require("express-react-views");
//==============================================

/**
 * Classe responsável por representar o Servidor.
 */
export class Server {

  /**
   * Cria uma instância de aplicação do Express.
   */
  private app: express.Application;

  /**
   * Retorna uma instância do Servidor.
   *
   * @class Server
   * @method getServer
   * @static
   * @return Retorna uma nova instância do Servidor.
   */
  public static getApplication(): express.Application {
    return new Server().app;
  }

  /**
   * Construtor da classe
   */
  constructor() {
    //Inicia a aplicação do Express.
    this.app = express();

    //Configura a aplicação.
    this.config();

    //Gerencia as rotas da aplicação.
    this.routes();

    //Gerencia quaisquer serviços externos utilizados.
    this.api();
  }

  /**
   * Inicia as configurações essenciais para o funcionamento do servidor.
   */
  public config() {

    //this.app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    this.app.use(express.static(path.join(__dirname, "public")));

    //Configura o React
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "jsx");
    this.app.engine('jsx', reactView.createEngine());

    //Utiliza logger middlware
    this.app.use(logger("dev"));

    //Utiliza o parser Json
    this.app.use(bodyParser.json());

    //Utiliza o query string parser middlware
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    //Utiliza cookie parser middleware
    this.app.use(cookieParser());

    //Utiliza override middlware
    this.app.use(methodOverride());

    //Captura de erros 404
    this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      err.status = 404;
      next(err);
    });

    //Captura de erros padrões
    this.app.use(errorHandler());

  }

  /**
  * Cria e gerencia as rotas.
  *
  * @class Server
  * @method config
  * @return void
  */
  private routes() {
    let router: express.Router;
    router = express.Router();

    //Inicia as rotas definidas em IndexRoute
    IndexRoute.create(router);

    //Utiliza router middleware
    this.app.use(router);
  }

  /**
   * Gerencia API's externas como banco de dados, por exemplo.
   */
  private api() {
    console.log("API's externas iniciadas");
  }
}