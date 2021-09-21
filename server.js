// Get our dependencies
var express = require('express');
var app = express();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : process.env.DB_HOST || 'mysql',
  user     : process.env.DB_USER || 'applicationuser',
  password : process.env.DB_PASS || 'applicationuser',
  database : process.env.DB_NAME || 'movie_db'
});

connection.connect(
 function(err, res){
 if (err){
   }}
  );

//Testing endpoint
app.get('/', function(req, res){
  var response = [{response : 'hello'}, {code : '200'}]
  res.json(response);
})

//Implement the movies API endpoint
app.get('/movies', function (req, res) {
  connection.query("SELECT * FROM moviereview",
    function (err, rows) {
      if (err) {
      var movies = [
          {title : 'Database Error', release: '500'},
           ]
     res.json(movies);
     }
   else  {
     res.json(rows)
      }
  });
})

// Implement the reviewers API endpoint
app.get('/reviewers', function (req, res) {
  connection.query("SELECT * FROM reviewer",
 function (err, rows) {
  if (err) {
      var authors = [
          {name : 'Database Error', publication: '500'},
           ]
     res.json(authors);
     }
   else  {
     res.json(rows)
      }
  });
})

// Implement the publications API endpoint
app.get('/publications', function (req, res) {
  connection.query("SELECT * FROM publication",
    function (err, rows) {
      if (err) {
      var publications = [
          {name : 'Database Error', avatar: '500'},
           ]
     res.json(publications);
     }
   else  {
     res.json(rows)
      }
  });
})

//Implement the pending reviews API endpoint
app.get('/pending', function (req, res) {
connection.query("SELECT title, `release`, score, reviewer,publication FROM pending JOIN reviewer on pending.reviewer = reviewer.name ",
    function (err, rows) {
       if (err) {
      var pending = [
          {title : 'Database Error', reviewer: '500'},
           ]
    res.json(pending);
    }
   else  {
     res.json(rows)
      }
  });
})

console.log("server listening through port: "+process.env.PORT);
// Launch our API Server and have it listen on port 3000.
app.listen(process.env.PORT || 3000);
module.exports = app;