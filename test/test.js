process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('API', () => {

/*
  * Test the /GET route
  */
  describe('/GET movies', () => {
      it('it should GET any reply', (done) => {
        chai.request(server)
            .get('/movies')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });
  describe('/GET pending', () => {
    it('it should GET any reply', (done) => {
      chai.request(server)
          .get('/pending')
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
});
describe('/GET test', () => {
  it('it should GET any reply', (done) => {
    chai.request(server)
        .get('/test')
        .end((err, res) => {
            res.should.have.status(200);
          done();
        });
  });
});

describe('/GET reviewers', () => {
  it('it should GET any reply', (done) => {
    chai.request(server)
        .get('/reviewers')
        .end((err, res) => {
            res.should.have.status(200);
          done();
        });
  });
});

describe('/GET publications', () => {
  it('it should GET any reply', (done) => {
    chai.request(server)
        .get('/pending')
        .end((err, res) => {
            res.should.have.status(200);
          done();
        });
  });
});
});
