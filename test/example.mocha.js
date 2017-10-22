var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var buildapp = require('../bin/build/app');
var app = buildapp.Server.getApplication();

var assert = chai.assert;

describe('Testando Rotas', () => {

  it('[1] Get index', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        assert.equal(res.status, 200);
        done();
      });
  });

  it('[2] Get erro 404', () => {
    chai.request(app)
      .post('/algo_estranho')
      .end((err, res) => {
        assert.equal(res.status, 404);
        done();        
      });
  });

});