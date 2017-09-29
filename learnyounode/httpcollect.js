var http = require('http');

var uri = process.argv[2];

function dataHandler(response){
    var alldata = [];
    response.setEncoding('utf8');
    response.on('data', function(data){
      //console.log(data);
      alldata.push(data);
    });

    response.on('error', function(error){
      return console.log(error);
    });

    response.on('end', function(){
      var sentence = alldata.join("");
      var count = sentence.length;
      console.log(count);
      console.log(sentence);
    });
};

http.get(uri, dataHandler);
