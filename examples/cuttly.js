const prettylink = require('../index.js');

// Cuttly Short URL Demo
const cuttly = new prettylink.Cuttly('CuttlyAccessToken');
cuttly
  .short('https://github.com/stu01509/pretty-link')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
