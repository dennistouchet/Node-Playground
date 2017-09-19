var fs = require('fs');

fs.readFile(process.argv[2], function(error, data){
  if(error){
      return console.log("ERROR: ", error);
  }
  var rowcount = data.toString().split('\n').length -1;
  console.log(rowcount);
});
