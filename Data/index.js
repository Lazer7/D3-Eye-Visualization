const fs = require('fs')
var dataGZD = require('./p6treeFXD');
//var dataFXD = require('./');

var counter = 0;
var total = 0;
var final = [];
//10 seconds of data
var timeMax = 100000

dataGZD.forEach(element => {
    // dataFXD.forEach(elementFXD => {
    //   if( elementFXD.Time == elementGZD.Time){final.push(elementFXD); counter++; console.log() }
    // })
     if( element.Time < timeMax){final.push(element); counter++;}
    //if (element.leftcode < 2 &&
    //    element.rightcode < 2 &&
    //    element.leftscreenx > -1000 &&
    //    element.rightscreenx > -1000 &&
    //    element.leftscreeny > -1000 &&
    //    element.rightscreeny > -1000 &&
    //    element.time < timemax) {
    //    counter++;
    //    final.push(element)
    //}
});

fs.writeFile("testingtreeGZD.js", JSON.stringify(final), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


console.log(counter);
console.log(total)
