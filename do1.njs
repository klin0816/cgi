#!/usr/local/bin/node                                                           
var fs = require('fs');

var querystring = require("querystring");
var param = querystring.parse(process.env.QUERY_STRING);
console.log("Content-type: text/html; charset='utf-8'\n")

var obj = JSON.parse(fs.readFileSync('name1.json', 'utf-8'));

for(i = 0; i < 5; i++){
  if(param.id == Object.keys(obj)[i]){
    console.log("<h1>Hello, " + obj[Object.keys(obj)[i]][0] + obj[Object.keys(obj)[i]][1] + "</h1>");
    process.exit(1);
  }
}

console.log("Who are you?")
