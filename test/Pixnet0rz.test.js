const should = require('should');
const shortLink = require('../index');

const pixnet0rz = new shortLink.Pixnet0rz();

describe('# Pixnet0rz Test', () => {
  it('Post a valid url.', (done) => {
    pixnet0rz.short('https://github.com/stu01509/short-link').then((result) => {
      result.should.be.a.String();
      result.length.should.be.above(10);
      done();
    }).catch((err) => {
      err.should.be.a.empty();
      done();
    });
  });

  it('Post a invalid url.', (done) => {
    pixnet0rz.short('invalidurl').then((result) => {
      result.should.be.a.empty();
      result.length.should.be.equal(0);
      done();
    }).catch((err) => {
      err.should.be.a.empty();
      done();
    });
  });

  it('Post a empty url.', (done) => {
    pixnet0rz.short('').then((result) => {
      result.should.be.a.empty();
      result.length.should.be.equal(0);
      done();
    }).catch((err) => {
      err.should.be.a.empty();
      done();
    });
  });
});
