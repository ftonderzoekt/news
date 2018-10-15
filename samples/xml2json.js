var fs = require('fs');
var convert = require('xml-js');
var xml = require('fs').readFileSync('kavels.xml', 'utf8');
var options = {
                compact: true,
                ignoreAtrributes: true,
                ignoreDeclaration: true
              };
var result = convert.xml2js(xml, options);
var kavels = JSON.stringify(result, null, 2);

console.log(JSON.stringify(result, null, 2));

fs.writeFile('kavels.json', kavels, 'utf8', function(err){
        if(err){
              console.log(err);
        } else {
              console.log('Everything went OK!');
        }
});
