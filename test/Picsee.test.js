const should = require('should');
const shortLink = require('../index');

const picsee = new shortLink.Picsee();

describe('# Picsee Test', () => {
  it('Init picsee access token.', (done) => {
    picsee.init('testaccesstoken');
    picsee.accessToken.length.should.be.above(0);
    picsee.accessToken.should.be.not.empty();
    done();
  });

  it('Post a valid url.', (done) => {
    picsee.init(process.env.PicseeAccessToken);
    picsee.short('https://github.com/stu01509/short-link').then((result) => {
      result.should.be.a.Object();
      result.should.not.be.empty();
      result.length.should.be.above(10);
      done();
    }).catch((err) => {
      err.should.be.a.empty();
      done();
    });
  });

  it('Post a invalid url.', (done) => {
    picsee.init(process.env.PicseeAccessToken);
    picsee.short('invalidurl').then((result) => {
      result.should.be.a.empty();
      result.length.should.be.equal(0);
      done();
    }).catch((err) => {
      err.should.be.a.Object();
      err.should.not.be.empty();
      done();
    });
  });

  it('Post a empty url.', (done) => {
    picsee.init(process.env.PicseeAccessToken);
    picsee.short('').then((result) => {
      result.should.be.a.empty();
      result.length.should.be.equal(0);
      done();
    }).catch((err) => {
      err.should.be.a.Object();
      err.should.not.be.empty();
      done();
    });
  });

  it('Use a wrong access token', (done) => {
    picsee.init('useawrongaccesstoken');
    picsee.short('https://larrylu.blog/nodejs-mocha-travis-ci-unit-test-e859a9446e16').then((result) => {
      result.should.be.a.empty();
      result.length.should.be.equal(0);
      done();
    }).catch((err) => {
      err.should.be.a.Object();
      err.should.not.be.empty();
      done();
    });
  });

  it('Post a valid url use customShortUrlMeta.', (done) => {
    picsee.init(process.env.PicseeAccessToken);
    picsee.customShortUrlMeta('https://github.com/stu01509/short-link', 'Short-Link', 'Mocha Test', 'https://cdn.iconscout.com/icon/free/png-256/mocha-1-1175012.png').then((result) => {
      result.should.be.a.Object();
      result.should.not.be.empty();
      result.length.should.be.above(10);
      done();
    }).catch((err) => {
      err.should.be.a.empty();
      done();
    });
  });

  it('Get a short url overview info.', (done) => {
    picsee.init(process.env.PicseeAccessToken);
    picsee.getOverview('JEW9L').then((result) => {
      result.should.not.be.empty();
      result.length.should.be.above(10);
      done();
    }).catch((err) => {
      err.should.be.a.empty();
      done();
    });
  });
});
