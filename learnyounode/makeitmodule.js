/*
  DESCRIPTION: returns an array of all files of a given extention in the given directory.
*/
function filterls(dir, type, callback){
  var fs = require('fs');
  fs.readdir(dir, function(err, files){
    if(err){
      return callback(err);
    }
    var data = [];
    files.forEach(function(file){
      if(file.split('.')[1] === type){
        data.push(file);
      }
    });
    return callback(null,data);
  });
};

module.exports = filterls;
