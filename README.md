# Quick List
Uma lista simples e fechada, utilizando:
* Expressjs
* Node
* testes de unidade
* typescript
* programação reativa
* React como engine front-end.
* gulp como automatizador de tarefas

# Instalação
1. Clone o repositório com: 
```
git clone https://github.com/PedroDrim/Quick-List.git
```
2. Dentro do diretório gerado monte o container com o Docker da aplicação com: 
```
docker build -t <nome do container> .
```
3. Execute o container do Docker com o comando:
```
sudo docker run -p <porta de saida>:5000 -d <nome do container>
```

# Funções Esperadas

### Sistema
* Gerar nova pessoa.
* Listar pessoas existentes.
* Atualizar pessoa existente.
* Excluir pessoa existente.

# Observações obtidas

* Uso de requisições constantes para manter a lista atualizada "automaticamente".
* A falta de boas práticas de referência para o regenciamento de rotas.