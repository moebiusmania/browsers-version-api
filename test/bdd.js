'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('./../index');

chai.use(chaiHttp);


describe('/GET', () => {
  it('it should GET all the browsers versions', (done) => {
    chai.request('http://localhost:8080')
      .get('/')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(6);
          done();
      });
  });
});