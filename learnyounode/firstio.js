var fs = require('fs');

var fileBuffer = fs.readFileSync(process.argv[2]);
var newlinecount = 0;

if(typeof fileBuffer != 'undefined'){
    var fileString = fileBuffer.toString();
    newlinecount = (fileString.split('\n').length - 1);
}

console.log(newlinecount);
