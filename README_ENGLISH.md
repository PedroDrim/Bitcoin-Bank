# Quick List

[README em Portugues-BR](https://github.com/PedroDrim/Quick-List/blob/master/README.md)

### Description

Quick List is a project made with the main goal is to learn the following tools:

| Name | Detail |
|-------|--------|
| Expressjs | Above of 4.15.2 |
| Node | 4.2.6
| mocha | Above of 4.0.1 |
| chai | Above of 4.1.2 |
| chai-http | Above of 3.0.0 |
| Typescript | Above of 2.5.3 |
| Reactive Programming (RXJS) | Above of 5.5.0 |
| React , React-DOM | Above of 16.0.0 |
| Gulp | Above of 3.9.1 |
| Docker | 17.12.0-ce Build c97c6d6 |

Quick List is a locked list whose interation can be made only by **REST** requests in the following routes:

| Name | Type | Input | Output |
|------|------|---------|-------|
| / | GET | - | Page HTML text |
| / | POST | { cpf: "000-000-000-04", name: "Teste", age: 12 } | Add a new person to the list |
| /:cpf | POST | - | Return the person with the selected cpf |
| /get/list | POST | - | Return all the element's list |
| / | PUT | { cpf: "000-000-000-04", name: "Teste", age: 12 } | Update a person with the selected cpf |
| /:cpf | DELETE | - | Remove a person with the selected cpf |

# Instalation

1. Clone the repository with: 
```
git clone https://github.com/PedroDrim/Quick-List.git
```
2. Inside the cloned directory build the Docher container of the application with:
```
sudo docker build -t <container name> .
```
3. Run the Docker container with:
```
sudo docker run -p <output port>:5000 -d <container name>
```

# Expected functions

1. Add a new person.
2. List all the peoples on the list.
3. Update an existent person.
4. Remove an existent person.
5. Solve route errors.

# Observations

| Identificator | Description | Observation |
|---------------|-----------|------------|
| FAULT-1 | Contant requests to make the list "automatically" updated | Learn more about reactive programming must solve this fault |
| FAULT-2 | The lack of good practices to routes management | At the lack of references I must to make my own good practices |
| FAULT-3 | Was hard to do the test cases with **Mocha-Chai** | Create another projects just to focus on these tools must solve this falt. |
