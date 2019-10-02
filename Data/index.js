const fs = require('fs')
var dataGZD = require('./testingtreeGZD');
var dataFXD = require('./');

var counter = 0;
var total = 0;
var final = [];
//10 seconds of data
var timeMax = 100000

dataGZD.forEach(elementGZD => {
    // dataFXD.forEach(elementFXD => {
    //   if( elementFXD.Time == elementGZD.Time){final.push(elementFXD); counter++; console.log() }
    // })
    // if( element.Time < timeMax){final.push(element); counter++;}
    if (element.LeftCode < 2 &&
        element.RightCode < 2 &&
        element.LeftScreenX > -1000 &&
        element.RightScreenX > -1000 &&
        element.LeftScreenY > -1000 &&
        element.RightScreenY > -1000) {
        counter++;
        final.push(element)
    }
});

fs.writeFile("testingtreeFXD.js", JSON.stringify(final), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


console.log(counter);
console.log(total)
