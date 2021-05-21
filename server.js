// Get our dependencies
var express = require("express");
var app = express();
var publicIp = require("public-ip");
var mysql = require("mysql");
var dotenv = require("dotenv").config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
connection.connect();

//Healthcheck
app.get("/", function(req, res) {
  res
    .status(200)
    .json({ uptime: process.uptime(), message: "OK", timestamp: Date.now() });
});

// Implement the movies API endpoint
function getMovies(callback) {
  connection.query("SELECT * FROM movie_db.moviereview", function(err, rows) {
    callback(err, rows);
  });
}

app.get("/movies", function(req, res, next) {
  getMovies(function(err, moviesResult) {
    if (err) {
      res.status(500).json({ message: err });
    } else {
      if (moviesResult) {
        res.status(200).json(moviesResult);
      } else {
        res.status(409).json({ message: "Movies not found" });
      }
    }
  });
});

// Implement the reviewers API endpoint
function getReviewers(callback) {
  connection.query("SELECT * FROM movie_db.reviewer", function(err, rows) {
    callback(err, rows);
  });
}

app.get("/reviewers", function(req, res, next) {
  getReviewers(function(err, authors) {
    if (err) {
      res.status(500).json({ message: err });
    } else {
      if (authors) {
        res.status(200).json(authors);
      } else {
        res.status(409).json({ message: "Authors not found" });
      }
    }
  });
});

// Implement the publications API endpoint
function getPublications(callback) {
  connection.query("SELECT * FROM movie_db.publication", function(err, rows) {
    callback(err, rows);
  });
}

app.get("/publications", function(req, res, next) {
  getPublications(function(err, publications) {
    if (err) {
      res.status(500).json({ message: err });
    } else {
      if (publications) {
        res.status(200).json(publications);
      } else {
        res.status(409).json({ message: "Publications not found" });
      }
    }
  });
});

// Implement server ip API endpoint
app.get("/server_ip", async function(req, res) {
  var ip = await publicIp.v4();

  if (ip) {
    res.status(200).json({ message: ip });
  } else {
    res.status(409).json({ message: "IP address not found" });
  }
});

console.log("server listening through port: "+process.env.PORT);
// Launch our API Server and have it listen on port 3000.
app.listen(process.env.PORT || 3000);
module.exports = app;