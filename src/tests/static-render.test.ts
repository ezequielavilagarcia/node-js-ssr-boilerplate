import path from 'path';

import chai from 'chai';
import chaiHttp from 'chai-http';
import ejs from 'ejs';

import app from '../app';
import { RESPONSE_CODE } from '../config';

describe('[Static page] Render ', () => {
  before(() => {
    chai.use(chaiHttp);
  });
  it('/boilerplate', done => {
    const requestRoute = '/boilerplate';
    const fileToRender = 'boilerplate.ejs';
    const renderData = { pageTitle: 'Boilerplate page', path: requestRoute };
    const viewPath = path.join(__dirname, '..', 'views', fileToRender);

    chai
      .request(app)
      .get(requestRoute)
      .then(response => {
        ejs.renderFile(viewPath, renderData, (err, renderedHTML) => {
          chai.expect(response.text).to.be.equal(renderedHTML);
          chai.expect(response.status).to.be.equal(RESPONSE_CODE.SUCCESS);
          done();
        });
      });
  });

  it('/page-not-found', done => {
    const requestRoute = '/page-not-found';
    const fileToRender = '404.ejs';
    const renderData = { pageTitle: 'Page Not Found', path: requestRoute };
    const viewPath = path.join(__dirname, '..', 'views', fileToRender);

    chai
      .request(app)
      .get(requestRoute)
      .then(response => {
        ejs.renderFile(viewPath, renderData, (err, renderedHTML) => {
          chai.expect(response.text).to.be.equal(renderedHTML);
          chai.expect(response.status).to.be.equal(RESPONSE_CODE.NOT_FOUND);
          done();
        });
      });
  });
});
