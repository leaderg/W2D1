var https = require('https');

var options = {
  host: 'example.com',
  path: '/'
};

https.get(options, (res) => {
  res.setEncoding('utf8');
  res.on('data', (data) => {
    console.log('Chunk received!', + data.length);
  });
  res.on('end', () => {
    console.log('Response Completed.');
  });
});


function getAndPrintHTMLChunks (){
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  https.get(requestOptions, (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => {
      console.log(data, + '\n');
    });
    res.on('end', () => {
      console.log('End of Datastream.');
    })
  })
};

getAndPrintHTMLChunks();