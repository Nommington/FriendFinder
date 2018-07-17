var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8000;

console.log(__dirname);
app.use("/static", express.static(path.join(__dirname, "/app/public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});