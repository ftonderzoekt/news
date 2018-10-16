// Laad de benodigde packages
var fs = require('fs');
var convert = require('xml-js');

// Lees de XML-data in
var xml = require('fs').readFileSync('kavels.xml', 'utf8');

// Transformeer data naar JSON
var options = {
                compact: true,
                ignoreAtrributes: true,
                ignoreDeclaration: true
              };
var result = convert.xml2js(xml, options);
var kavels = JSON.stringify(result, null, 2);
console.log(JSON.stringify(result, null, 2)); // Controle

// Schrijf de data weg in een JSON-bestand
fs.writeFile('kavels.json', kavels, 'utf8', function(err){
        if(err){
              console.log(err);
        } else {
              console.log('Everything went OK!');
        }
});
