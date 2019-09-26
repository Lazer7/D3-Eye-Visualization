const fs = require('fs')
var data = require('./p6GZD');


var counter = 0;
var final = [];
data.forEach(element => {
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

fs.writeFile("yeetcannon.js", JSON.stringify(final), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


console.log(counter);