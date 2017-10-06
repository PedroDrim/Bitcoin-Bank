/**
 * Classe responsável por representar uma pessoa
 */

 export class Person {
     
    private name: string;
    private age: number;
    private cpf: string; // 'xxx-xxx-xxx-xx

    constructor(cpf: string, name: string, age: number){
        this.name = name;
        this.age = age;
        this.cpf = cpf;
    }

    public getName(): string{
        return(this.name);
    }

    public getAge(): number{
        return(this.age);
    }

    public getCpf(): string{
        return(this.cpf);
    }
 }