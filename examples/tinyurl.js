const prettylink = require('../index.js');

// TinyURL Short URL Demo
const tinyurl = new prettylink.TinyURL();
tinyurl.short('https://github.com/stu01509/pretty-link').then((result) => {
  console.log(`Here is your link: ${result}`);
}).catch((err) => {
  console.log(err);
});

(async () => {
  const result = await tinyurl.short('https://github.com/stu01509/pretty-link');
  console.log(`Here is your link: ${result}`);
})();
