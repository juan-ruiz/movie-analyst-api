const mysql = require('mysql2');
const { host , user, password, database} = require('./config.js');

const connection =  mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});


async function getReviewers(){
    return await connection.promise().query("select * from movie_db.reviewer ");
}

async function getMovies(){
    return await connection.promise().query("select m.title, m.release, m.score, r.name as reviewer, p.name as publication from movie_db.moviereview m, movie_db.reviewer r, movie_db.publication p where r.publication=p.name and m.reviewer=r.name");
}

async function getPublications(){
    return await connection.promise().query("select * from movie_db.publication");
}

async function getPendingPublications(){
    return await connection.promise().query("select m.title, m.release, m.score, r.name as reviewer, p.name as publication from movie_db.moviereview m, movie_db.reviewer r, movie_db.publication p where r.publication=p.name and m.reviewer=r.name and m.release=2018");
}

module.exports = {
    getMovies,
    getPendingPublications,
    getPublications,
    getReviewers
}