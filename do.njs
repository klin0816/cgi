#!/usr/local/bin/node
var json = require('jsonfile');
var querystring = require("querystring");
var param = querystring.parse(process.env.QUERY_STRING);
console.log("Content-type: text/html; charset='utf-8'\n")
json.readFile('name.json', function(err, results){
  for(i = 0; i < 5; i++){
    if(param.id == results.ID[i]){
      console.log("<h1>歡迎回來，" + results.NAME[i] + "</h1>");
      process.exit(1);
    }
  }
  console.log("<h1>你是誰?</h1>")
});
