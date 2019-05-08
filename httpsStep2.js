var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (res) => {
    res.setEncoding('utf8');
    var dataChunk;
    res.on('data', (data) => {
      dataChunk += data;
    });
    res.on('end', () => {
      console.log(dataChunk);
    });
  });

}

getAndPrintHTML();