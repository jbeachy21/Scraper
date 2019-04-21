var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");


var exphbs = require("express-handlebars");

var app = express();


app.engine("handlebars", exphbs({ 
    defaultLayout: "main", 
    layoutsDir: __dirname + '/views/layouts/',    //don't actually need this but w/e
    partialsDir: __dirname + '/views/partials/'   //don't actually need this but w/e
}));
app.set("view engine", "handlebars");


var PORT = process.env.PORT || 3000;

require("./controllers/routes")(app);

app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoScrape";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function() {
     
    console.log("Server listening on: http://localhost:" + PORT);
  });
  