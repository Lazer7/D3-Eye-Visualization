const fs = require('fs')
var data = require('./p6treeGZD');

var counter = 0;
var total = 0;
var final = [];
//10 seconds of data
var timeMax = 100000

data.forEach(element => {
    total++;
    //if( element.Time < timeMax){final.push(element); counter++;}
    if (element.LeftCode < 2 &&
        element.RightCode < 2 &&
        element.LeftScreenX > -1000 &&
        element.RightScreenX > -1000 &&
        element.LeftScreenY > -1000 &&
        element.RightScreenY > -1000 &&
        element.Time < timeMax) {
        counter++;
        final.push(element)
    }
});

fs.writeFile("testingtreeGZD.js", JSON.stringify(final), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


console.log(counter);
console.log(total)
