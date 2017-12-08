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

    this.list.addPerson(new Person("000-000-000-01", "Joao", 12));
    this.list.addPerson(new Person("000-000-000-02", "Maria", 10));
    this.list.addPerson(new Person("000-000-000-03", "José", 25));
  }

  private routesForGET() {

    //Get Rota padrão (index)
    this.router.get("/", (req: Request, res: Response) => {

      //set options
      let options: Object = {
        "title": "Express"
      };

      var view: string = "index";
      res.render(view, { prop: options });
    });
  }

  private routesForPOST() {

    //Adicionar uma nova person via REST
    this.router.post("/", (req: Request, res: Response) => {

      if (_.isEmpty(req.body)) {
        res.status(400).send("Não foi possivel adicionar o elemento, corpo vazio.");
      } else {

        var cpf: string = req.params.cpf;

        var person = new Person(
          req.body.cpf,
          req.body.name,
          req.body.age
        );

        if (this.list.addPerson(person)) {
          res.send("Elemento adicionado com sucesso.");
        } else {
          res.status(400).send("Não foi possivel adicionar o elemento, cpf já existente.");
        }

      }
    });

    //Visualizar uma person com base no cpf
    this.router.post("/:cpf", (req: Request, res: Response) => {

      var cpf: string = req.params.cpf;
      var person: Person = this.list.getPersonByCPF(cpf);

      if (_.isEmpty(person)) {
        res.status(400).send("Não foi possivel encontrar o elemento.");
      } else {
        res.json(person);
      }

    });

    //Exibir body
    this.router.post("/get/list", (req: Request, res: Response) => {

      var l: Person[] = this.list.getList();
      if (_.isEmpty(l)) {
        res.status(400).send("Lista vazia.");
      } else {
        res.json(l);
      }

    });

  }

  private routesForPUT() {

    //Atualizar uma person com base no cpf
    this.router.put("/", (req: Request, res: Response) => {

      if (_.isEmpty(req.body)) {
        res.status(400).send("Não foi possivel atualizar o elemento, corpo vazio.");
      } else {

        var person = new Person(
          req.body.cpf,
          req.body.name,
          req.body.age
        );

        if (this.list.updatePerson(person)) {
          res.send("Elemento atualizado com sucesso.");
        } else {
          res.status(400).send("Não foi possivel atualizar o elemento, cpf já existente.");
        }

      }

    });
  }

  private routesForDELETE() {

    //Remover uma person com base no cpf
    this.router.delete("/:cpf", (req: Request, res: Response) => {

      var cpf: string = req.params.cpf;

      if (this.list.removePersonByCPF(cpf)) {
        res.send("Elemento removido com sucesso.");
      } else {
        res.status(400).send("Não foi possivel remover o elemento, cpf inexistente.");
      }

    });
  }
}
