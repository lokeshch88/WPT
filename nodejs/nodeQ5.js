const fs = require("fs")

fs.readFile("mydata.txt", function (err, data1) {
    if (err) {
        console.log("error occured", err);
    }
    else {
        console.log(data1.toString());
        console.log(data1.length);
    }
});
fs.readFile("myfile.data", function (err, data) {
    if (err) {
        console.log("error occured", err)
    }
    else {
        console.log(data.toString());
        console.log(data)
    }

});