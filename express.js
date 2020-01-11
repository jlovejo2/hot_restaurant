require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var http = require("http"); 

var PORT = 300;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  

function handleRequest(req, res) {
    response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    
    console.log("Server listening on: http://localhost:" + PORT);
  });