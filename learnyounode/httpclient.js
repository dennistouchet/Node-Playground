var http = require('http');

var uri = process.argv[2];

function dataHandler(response){
  response.setEncoding("utf8");
  response.on("data", function(data){
    console.log(data);
  });
  response.on("error",function(error){
    console.log(error)
  });
};

http.get(uri, dataHandler);
