import { Person } from "../model/person";

/**
 * Classe responsável por realizar o CRUD de 'person'
 */
export class List {

    private people: Person[];

    constructor() {
        this.people = new Array();
    }

    // CREATE - Crud
    public addPerson(person: Person): boolean {

        var index: number = this.getPersonIndex(person.getCpf());

        if (!this.exist(index)) {
            this.people.push(person);
            return true;
        } else {
            return false;
        }

    }

    // DELETE - cruD
    public removePersonByCPF(cpf: string): boolean {

        var index: number = this.getPersonIndex(cpf);

        if (this.exist(index)) {
            this.people.splice(index, 1);
            return true;
        } else {
            return false;
        }

    }

    // READ - cRud
    public getPersonByCPF(cpf: string): Person {

        var index: number = this.getPersonIndex(cpf);

        if (this.exist(index))
            return this.people[index];
    }

    // UPDATE - crUd
    public updatePerson(person: Person): boolean {

        var index: number = this.getPersonIndex(person.getCpf());

        if (this.exist(index)) {
            this.people[index] = person;
            return true;
        } else {
            return false;
        }
    }

    // READ - cRud
    public getList(): Person[] {
        return (this.people);
    }

    private getPersonIndex(cpf: string): number {

        var index: number;
        for (index = 0; index < this.people.length; index++) {
            var person: Person = this.people[index];

            var cpf_person: string = person.getCpf();
            if (cpf_person == cpf) {
                return (index);
            }
        }

        return -1;
    }

    private exist(index: number): boolean {
        return(index != -1);
    }
}