var filterls = require('./makeitmodule');

var path = process.argv[2];
var ext = process.argv[3];

filterls(path, ext, function(err, data){
  if(err){
    return console.log(err);
  }
  data.forEach(d => console.log(d));
});
