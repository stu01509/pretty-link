const prettylink = require('../index.js');

// Pixnet0rz Short URL Demo
const pixnet0rz = new prettylink.Pixnet0rz();
pixnet0rz.short('https://github.com/stu01509/pretty-link').then((result) => {
  console.log(`Here is your link: ${result}`);
}).catch((err) => {
  console.log(err);
});
