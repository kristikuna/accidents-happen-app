var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes");


var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", routes);

var port = process.env.PORT || 5000;
var server = app.listen(port, function () {
    console.log("App's server listening at http://localhost:%s", port);
});
