const should = require('should');
const shortLink = require('../index');

const tinyUrl = new shortLink.TinyURL();

describe('# TinyUrl Test', () => {
  it('Post a valid url.', (done) => {
    tinyUrl.short('https://github.com/stu01509/short-link').then((result) => {
      result.should.be.a.String();
      result.length.should.be.above(10);
      done();
    }).catch((err) => {
      err.should.be.a.empty();
      done();
    });
  });

  it('Post a invalid url.', (done) => {
    tinyUrl.short('invalidurl').then((result) => {
      result.should.be.a.empty();
      result.length.should.be.equal(0);
      done();
    }).catch((err) => {
      err.should.be.a.String();
      done();
    });
  });

  it('Post a empty url.', (done) => {
    tinyUrl.short('').then((result) => {
      result.should.be.a.empty();
      result.length.should.be.equal(0);
      done();
    }).catch((err) => {
      err.should.be.a.String();
      done();
    });
  });
});
