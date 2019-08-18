const should = require('should');
const shortLink = require('../index');

const bitly = new shortLink.Bitly();

describe('# Bitly Test', () => {
  it('Init bitly access token.', (done) => {
    bitly.init('testaccesstoken');
    bitly.accessToken.length.should.be.above(0);
    bitly.accessToken.should.be.not.empty();
    done();
  });

  it('Post a valid url.', (done) => {
    bitly.init(process.env.BitlyAccessToken);
    bitly.short('https://github.com/stu01509/short-link').then((result) => {
      result.should.be.a.Object();
      result.should.not.be.empty();
      done();
    }).catch((err) => {
      err.should.be.a.empty();
      done();
    });
  });

  it('Post a invalid url.', (done) => {
    bitly.init(process.env.BitlyAccessToken);
    bitly.short('invalidurl').then((result) => {
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
    bitly.init(process.env.BitlyAccessToken);
    bitly.short('').then((result) => {
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
    bitly.init('useawrongaccesstoken');
    bitly.short('https://github.com/stu01509/short-link').then((result) => {
      result.should.be.a.empty();
      result.length.should.be.equal(0);
      done();
    }).catch((err) => {
      err.should.be.a.Object();
      err.should.not.be.empty();
      done();
    });
  });

  it('Get a short url info.', (done) => {
    bitly.init(process.env.BitlyAccessToken);
    bitly.getLinkInfo('bit.ly/2yXlbdQ').then((result) => {
      result.should.not.be.empty();
      done();
    }).catch((err) => {
      err.should.be.a.empty();
      done();
    });
  });

  it('Get a short url click counts', (done) => {
    bitly.init(process.env.BitlyAccessToken);
    bitly.getClick('bit.ly/2yXlbdQ').then((result) => {
      result.should.not.be.empty();
      done();
    }).catch((err) => {
      err.should.be.a.empty();
      done();
    });
  });
});
