# Quick List

[README in English](https://github.com/PedroDrim/Quick-List/blob/master/README_ENGLISH.md)

### Descrição

Quick List é um projeto feito puramente visando o aprendizado das seguintes ferramentas: 

| Nome | Detalhe |
|-------|--------|
| Expressjs | Acima de 4.15.2 |
| Node | 4.2.6
| mocha | Acima de 4.0.1 |
| chai | Acima de 4.1.2 |
| chai-http | Acima de 3.0.0 |
| Typescript | Acima de 2.5.3 |
| Programação reativa (RXJS) | Acima de 5.5.0 |
| React , React-DOM | Acima de 16.0.0 |
| Gulp | Acima de 3.9.1 |
| Docker | 17.12.0-ce Build c97c6d6 |

Quick List é uma lista fechada cuja interação só se é possivel por meio de requisições **REST**, nas seguintes rotas:

| Nome | Tipo | Entrada | Saida |
|------|------|---------|-------|
| / | GET | - | Texto HTML da página |
| / | POST | { cpf: "000-000-000-04", name: "Teste", age: 12 } | Insere uma nova pessoa á lista |
| /:cpf | POST | - | Retorna a pessoa com o cpf especificado |
| /get/list | POST | - | Retorna todos os elementos da lista |
| / | PUT | { cpf: "000-000-000-04", name: "Teste", age: 12 } | Atualiza a pessoa da lista com o cpf espeficicado |
| /:cpf | DELETE | - | Remove da lista a pessoa com o cpf especificado |

# Instalação

1. Clone o repositório com: 
```
git clone https://github.com/PedroDrim/Quick-List.git
```
2. Dentro do diretório gerado monte o container com o Docker da aplicação com: 
```
sudo docker build -t <nome do container> .
```
3. Execute o container do Docker com o comando:
```
sudo docker run -p <porta de saida>:5000 -d <nome do container>
```

# Funções Esperadas

1. Cadastrar nova pessoa.
2. Listar pessoas existentes.
3. Atualizar pessoa existente.
4. Excluir pessoa existente.
5. Tratar erros de rota.

# Observações obtidas

| Identificador | Descrição | Observação |
|---------------|-----------|------------|
| FAULT-1 | Uso de requisições constantes para manter a lista atualizada "automaticamente" | Aprofundar mais em programação reativa deverá solucionar essa falha |
| FAULT-2 | A falta de boas práticas de referência para o regenciamento de rotas | Na falta de referências deverei criar minhas próprias boas-práticas |
| FAULT-3 | Dificuldade ao realizar os casos de teste com **Mocha-Chai** | Criar outros projetos focados especificamente nessas ferramentas resolverá o problema. |
