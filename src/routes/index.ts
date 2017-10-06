import { NextFunction, Request, Response, Router } from "express";
import { List } from "../model/list";
import { Person } from "../model/person";
import * as _ from "lodash";

/**
 * Classe responsável por gerenciar as rotas de Index.
 */
export class IndexRoute {

  private router: Router;
  private list: List;

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor(router: Router) {

    this.router = router;
    this.createList();
    this.routesForGET();
    this.routesForPOST();
    this.routesForPUT();
    this.routesForDELETE();
  }

  private createList() {
    this.list = new List();
    this.list.addPerson(new Person("111", "Joao", 1));
    this.list.addPerson(new Person("1325", "Maria", 10));
    this.list.addPerson(new Person("1564", "José", 25));
  }

  private routesForGET() {

    //Adicionar home page route
    this.router.get("/", (req: Request, res: Response, next: NextFunction) => {

      var person: Person = this.list.getPersonByCPF("111");

      //set options
      let options: Object = {
        "title": "Express",
        "name": person.getName()
      };

      var view: string = "index";
      res.render(view, options);
    });
  }

  private routesForPOST() {

    //Adicionar home page route
    this.router.post("/", (req: Request, res: Response, next: NextFunction) => {

      if (_.isEmpty(req.body)) {
        res.status(400).send("Não foi possivel adicionar o elemento, verifique os parametros.");
      } else {

        var cpf: string = req.params.cpf;

        var person = new Person(
          req.body.cpf,
          req.body.name,
          req.body.age
        );

        this.list.addPerson(person);
        res.send("Elemento adicionado com sucesso.");
      }

    });

    //Adicionar home page route
    this.router.post("/:cpf", (req: Request, res: Response, next: NextFunction) => {

      var cpf: string = req.params.cpf;
      var person: Person = this.list.getPersonByCPF(cpf);
      res.json(person);
    });
  }

  private routesForPUT() {

    //Adicionar home page route
    this.router.put("/:cpf", (req: Request, res: Response, next: NextFunction) => {

      if (_.isEmpty(req.body)) {
        res.status(400).send("Não foi possivel adicionar o elemento, verifique os parametros.");
      } else {

        var cpf: string = req.params.cpf;

        var person = new Person(
          req.body.cpf,
          req.body.name,
          req.body.age
        );

        this.list.updatePersonByCPF(cpf, person);
        res.send("Elemento atualizado com sucesso.");
      }

    });
  }

  private routesForDELETE() {

    //Adicionar home page route
    this.router.delete("/:cpf", (req: Request, res: Response, next: NextFunction) => {

      var cpf: string = req.params.cpf;

      this.list.removePersonByCPF(cpf);
      res.send("Elemento removido com sucesso.");
    });
  }
}
