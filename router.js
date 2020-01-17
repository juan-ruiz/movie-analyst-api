const express = require('express');
const {
  getMovies,
  getPendingPublications,
  getPublications,
  getReviewers
} = require('./services.js');

let router = express.Router();

router.get('/', function(req, res){
  var response = [{response : 'hello'}, {code : '200'}]
  res.json(response);
});

router.get('/reviewers', async function(req, res){
  try {
    const [reviewers, ] = await getReviewers();
    res.json(reviewers);
  } catch (error) {
    console.log(error);
    res.status(500).json([{response : 'error'}, {code : '500'}]);
  }
});

  router.get('/movies', async function(req, res){
    try {
      const [movies, ] = await getMovies();
      res.json(movies);
    } catch (error) {
      console.log(error);
      res.status(500).json([{response : 'error'}, {code : '500'}]);
    }
  });

  router.get('/publications',async function(req, res){
    try {
      const [publications, ] = await getPublications();
      res.json(publications);
    } catch (error) {
      console.log(error);
      res.status(500).json([{response : 'error'}, {code : '500'}]);
    }
  });

  router.get('/pending',async function(req, res){
    try {
      const [pendingPublications, ] = await getPendingPublications();
      res.json(pendingPublications);
    } catch (error) {
      console.log(error);
      res.status(500).json([{response : 'error'}, {code : '500'}]);
    }
  });

  module.exports = router;