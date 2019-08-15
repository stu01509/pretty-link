const request = require('request');

module.exports = class TinyURL {
  constructor() {
    this.TINYURL_API = 'http://tinyurl.com/api-create.php?url='
  }

  short(url) {
    this.url = url;
    return new Promise((resolve, reject) => {
      request(this.TINYURL_API + this.url, (err, res, body) => {
        if (err || res.statusCode !== 200) {
          reject();
        }
        resolve(body);
      });
    });
  }
};
