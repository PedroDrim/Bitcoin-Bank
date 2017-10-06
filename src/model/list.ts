import { Person } from "../model/person";

/**
 * Classe responsável por realizar o CRUD de 'person'
 */
export class List {

    private people: Person[];

    constructor() {
        this.people = new Array();
    }

    public addPerson(person: Person) {

        this.people.push(person);
    }

    public removePersonByCPF(cpf: string) {

        var index: number;
        for (index = 0; index < this.people.length; index++) {
            var person: Person = this.people[index];

            var cpf_person: string = person.getCpf();
            if (cpf_person == cpf) {
                this.people.splice(index, 1);
            }
        }
    }

    public getPersonByCPF(cpf: string): Person {

        var index: number;
        for (index = 0; index < this.people.length; index++) {
            var person: Person = this.people[index];

            var cpf_person: string = person.getCpf();
            if (cpf_person == cpf) {
                return (person);
            }
        }
    }

    public updatePersonByCPF(cpf: string, newPerson: Person) {

        var index: number;
        for (index = 0; index < this.people.length; index++) {
            var person: Person = this.people[index];

            var cpf_person: string = person.getCpf();
            if (cpf_person == cpf) {
                this.people[index] = newPerson;
            }
        }
    }

    public getList(): Person[] {
        return (this.people);
    }
}