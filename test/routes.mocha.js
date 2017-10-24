var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var buildapp = require('../bin/build/app');
var app = buildapp.Server.getApplication();

var assert = chai.assert;

describe('[1] Testando Rotas GET', () => {

  it('[1.1] Get index page', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.type, "text/html");
        done();
      })
  });

  it('[1.2] Get error 404', (done) => {
    chai.request(app)
      .get('/unknown')
      .end((err, res) => {
        assert.equal(res.status, 404);
        done();
      })
  });

});

describe('[2] Testando Rotas POST', () => {

  it('[2.1] Add new person', (done) => {
    chai.request(app)
      .post('/')
      .send({
        cpf: "000-000-000-04",
        name: "Teste",
        age: 12
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });

  it('[2.2] Add person that exist', (done) => {
    chai.request(app)
      .post('/')
      .send({
        cpf: "000-000-000-01",
        name: "Teste",
        age: 12
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });

  it('[2.3] Add person with empty body', (done) => {
    chai.request(app)
      .post('/')
      .send({})
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });

  it('[2.4] Get person by cpf', (done) => {
    chai.request(app)
      .post('/000-000-000-01')
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });

  it('[2.5] Get list', (done) => {
    chai.request(app)
      .post('/get/list')
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });

  it('[2.5] Post error 404', (done) => {
    chai.request(app)
      .post('/error/unknown')
      .end((err, res) => {
        assert.equal(res.status, 404);
        done();
      })
  });

});

describe('[3] Testando Rotas PUT', () => {

  it('[3.1] Update person', (done) => {
    chai.request(app)
      .put('/')
      .send({
        cpf: "000-000-000-01",
        name: "Teste",
        age: 12
      })
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });

  it('[3.2] Update person that dont exist', (done) => {
    chai.request(app)
      .put('/')
      .send({
        cpf: "000-000-000-10",
        name: "Teste",
        age: 12
      })
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });

  it('[3.3] Update person with empty body', (done) => {
    chai.request(app)
      .put('/')
      .send({})
      .end((err, res) => {
        assert.equal(res.status, 400);
        done();
      });
  });

  it('[3.4] Put error 404', (done) => {
    chai.request(app)
      .put('/error/unknown')
      .end((err, res) => {
        assert.equal(res.status, 404);
        done();
      })
  });

});

describe('[4] Testando Rotas DELETE', () => {

  it('[4.1] Delete person that exist', (done) => {
    chai.request(app)
      .delete('/000-000-000-01')
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      })
  });

  it('[4.2] Delete error 404', (done) => {
    chai.request(app)
      .delete('/test/unknown')
      .end((err, res) => {
        assert.equal(res.status, 404);
        done();
      })
  });

});
