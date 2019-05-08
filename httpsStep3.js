var https = require('https');

function getAndPrintHTML (options) {
  https.get(options, (res) => {
    res.setEncoding('utf8');
    var dataChunk;
    res.on('data', (data) => {
      dataChunk += data;
    });
    res.on('end', () => {
      console.log(dataChunk);
    })
  })


}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};



getAndPrintHTML(otherOptions);