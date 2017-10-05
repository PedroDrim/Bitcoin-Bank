import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route_Interface";

/**
 * Classe responsável por gerenciar as rotas de Index.
 */
export class IndexRoute extends BaseRoute {

  /**
   * Criar as rotas.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {

    //Adicionar home page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().index(req, res, next);
    });

    //test
    router.post("/test/:id", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().index(req, res, next);
    });
  }

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * The home page route.
   *
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public index(req: Request, res: Response, next: NextFunction) {

    //set options
    let options: Object = {
      "title": "Express",
      "name": "Contato, 3,2,1... foi"
    };

    //render template
    this.render("index", req, res, options);
  }
}
