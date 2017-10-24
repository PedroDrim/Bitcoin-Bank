var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var buildapp = require('../bin/build/app');
var app = buildapp.Server.getApplication();

var assert = chai.should;

describe('Testando Rotas', () => {

  it('[1] Get index', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  });

  it('[2] Get erro 400', () => {
    chai.request(app)
      .post('/test/erro')
      .end((err, res) => {
        res.should.have.status(400);
        done();          
      });
      
  });

});