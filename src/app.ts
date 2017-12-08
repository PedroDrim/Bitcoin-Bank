//==============================================
// Iniciando imports para o typescript
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as path from "path";
import * as helmet from "helmet";
import * as compression from "compression";
import * as favicon from "serve-favicon";
import * as errorHandler from "errorhandler";
import * as cors from "cors";
import { IndexRoute } from "./routes/index";
// Import de Bibliotecas em javascript
var busboy = require("connect-busboy");
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
  private config() {

    //Utiliza o query string parser middlware
    this.app.use(bodyParser.urlencoded({ extended: true }));

    //Utiliza o parser Json
    this.app.use(bodyParser.json());

    //Utiliza logger middlware
    this.app.use(logger("dev"));

    //Utiliza cookie parser middleware
    this.app.use(cookieParser());

    //Utiliza busboy middleware
    this.app.use(busboy());

    //Utiliza compression middlware
    this.app.use(compression());

    //Utiliza helmet middlware
    this.app.use(helmet());

    //Utiliza cors middlware
    this.app.use(cors());

    this.app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    this.app.use(express.static(path.join(__dirname, "public")));

    //Configura o EJS
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "ejs");

    //Captura de erros 404
    this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      err.status = 404;
      next(err);
    });

    //Captura de erros padrões
    this.app.use(errorHandler());

    // Definindo porta
    var port = this.normalizePort(process.env.PORT || '5000');
    this.app.set('port', port);
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
    new IndexRoute(router);

    //Utiliza router middleware
    this.app.use(router);
  }

  /**
   * Gerencia API's externas como banco de dados, por exemplo.
   */
  private api() {
    console.log("API's externas iniciadas");
  }

  private normalizePort(value: string | number): number {

    var port: number = parseInt((value as string), 10);

    if (isNaN(port)) {
      // named pipe
      return (value as number);
    }

    if (port >= 0) {
      // port number
      return port;
    }
  }

}