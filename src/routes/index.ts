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

    //Get Rota padrão (index)
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

    //Adicionar uma nova person via REST
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

    //Visualizar uma person com base no cpf
    this.router.post("/:cpf", (req: Request, res: Response, next: NextFunction) => {

      var cpf: string = req.params.cpf;
      var person: Person = this.list.getPersonByCPF(cpf);

      if (_.isEmpty(person)) {
        res.status(400).send("Não foi possivel encontrar o elemento.");
      } else {
        res.json(person);
      }

    });

    //Exibir body
    this.router.post("/body", (req: Request, res: Response, next: NextFunction) => {
      res.send(JSON.stringify(req.body));
    });
  }

  private routesForPUT() {

    //Atualizar uma person com base no cpf
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

        if (this.list.updatePersonByCPF(cpf, person)) {
          res.send("Elemento atualizado com sucesso.");
        } else {
          res.status(400).send("Não foi possivel atualizar o elemento, verifique os parametros.");
        }

      }

    });
  }

  private routesForDELETE() {

    //Remover uma person com base no cpf
    this.router.delete("/:cpf", (req: Request, res: Response, next: NextFunction) => {

      var cpf: string = req.params.cpf;

      if (this.list.removePersonByCPF(cpf)) {
        res.send("Elemento removido com sucesso.");
      } else {
        res.status(400).send("Não foi possivel remover o elemento, verifique os parametros.");
      }

    });
  }
}
