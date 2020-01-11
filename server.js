require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
var express = require("express");
var path = require("path");


var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var characters = [
  {
    routeName: "",
    name: "",
    role: "",
    age: 900,
    forcePoints: 2000
  },
];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});


app.get("/api/characters", function(req, res) {
  return res.json(characters);
});


app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});


app.post("/api/characters", function(req, res) {

  var newCharacter = req.body;

  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
