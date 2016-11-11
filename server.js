// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  if(accounts.get(request.query.username)==request.query.password) {
    dreams.push(request.query.username);
    response.sendStatus(200);
  }
  else
    response.sendStatus(404);
});

// Simple in-memory store for now
var dreams = [
];
  
var accounts = new Map();
accounts.set("Bob", 123);
accounts.set("Tim", 456);
accounts.set("Joe", 789);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});