const prettylink = require('../index.js');

// Reurl Short URL Demo
const reurl = new prettylink.Reurl('ReurlAccessToken');
reurl.short('https://github.com/stu01509/pretty-link').then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
