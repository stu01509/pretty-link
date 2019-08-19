const prettylink = require('../index.js');

// Bitly Short URL Demo
const bitly = new prettylink.Bitly('BitlyAccessToken');
bitly.short('https://github.com/stu01509/pretty-link').then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

bitly.expand('bit.ly/308njvn').then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

bitly.getReferrersDomains('bit.ly/2yXlbdQ').then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

bitly.getClick('bit.ly/2yXlbdQ').then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

bitly.getLinkInfo('bit.ly/2yXlbdQ').then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
