var fs = require('fs');

var dir = process.argv[2];
var type = process.argv[3];

fs.readdir(dir, function(err, data){
  if(err){
    return console.log(err);
  }
  data.forEach(function(file){
    if(file.split('.')[1] === type){
      console.log(file);
    }
  });
});
