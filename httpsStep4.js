var https = require('https');
var mod = require('./http-functions');



function printHTML (html) {
  console.log(html);
};



var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

mod.getHTML(requestOptions, printHTML);