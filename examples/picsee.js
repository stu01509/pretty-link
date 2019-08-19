const prettylink = require('../index.js');

// Picsee Short URL Demo
const picsee = new prettylink.Picsee('PicseeAccessToken');
picsee.short('https://github.com/stu01509/pretty-link').then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

picsee.getOverview('JEW9L').then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
