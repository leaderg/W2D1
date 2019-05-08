var https = require('https');
var mod = require('./http-functions');

var UCOption = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var LCOption = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

var ReverseOption = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTML(html) {
  console.log(html);
};

function printUpperCase(html) {
  console.log(html.toUpperCase());
}

function printLowerCase(html) {
  console.log(html.toLowerCase());
}

function printReverse(html) {
  console.log(html.split("").reverse().join(""));
}

mod.getHTML(UCOption, printUpperCase);
mod.getHTML(LCOption, printLowerCase);
mod.getHTML(ReverseOption, printReverse);