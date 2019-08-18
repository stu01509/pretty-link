const should = require('should');
const shortLink = require('../index');

const reurl = new shortLink.Reurl();

describe('# Reurl Test', () => {
  it('Init reurl access token.', (done) => {
    reurl.init('testaccesstoken');
    reurl.apikey.length.should.be.above(0);
    reurl.apikey.should.be.not.empty();
    done();
  });

  it('Post a valid url.', (done) => {
    reurl.init(process.env.ReurlAccessToken);
    reurl.short('https://github.com/stu01509/short-link').then((result) => {
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
    reurl.init(process.env.ReurlAccessToken);
    reurl.short('invalidurl').then((result) => {
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
    reurl.init(process.env.ReurlAccessToken);
    reurl.short('').then((result) => {
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
    reurl.init('useawrongaccesstoken');
    reurl.short('https://github.com/stu01509/short-link').then((result) => {
      result.should.be.a.empty();
      result.length.should.be.equal(0);
      done();
    }).catch((err) => {
      err.should.be.a.Object();
      err.should.not.be.empty();
      done();
    });
  });
});
