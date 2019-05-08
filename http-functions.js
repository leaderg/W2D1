var https = require('https');
module.exports =
{ getHTML : function(options, callback) {
  https.get(options, (res) => {
    res.setEncoding('utf8');
    var dataChunk;
    res.on('data', (data) => {
      dataChunk += data;
    });
    res.on('end', ()=> {
      callback(dataChunk);
    });
  });
}}