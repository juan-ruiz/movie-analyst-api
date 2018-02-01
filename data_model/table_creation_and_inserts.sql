CREATE TABLE movie_db.moviereview (title VARCHAR(255) PRIMARY KEY, release VARCHAR(255), score INTEGER, reviewer VARCHAR(255), FOREIGN KEY (reviewer) REFERENCES reviewer(name) ON DELETE CASCADE);
CREATE TABLE movie_db.reviewer (name VARCHAR(255) PRIMARY KEY, avatar VARCHAR(255), publication VARCHAR(255), FOREIGN KEY (publication) REFERENCES publication(name) ON DELETE CASCADE);
CREATE TABLE movie_db.publication (name VARCHAR(255) PRIMARY KEY, avatar VARCHAR(20));

INSERT INTO movie_db.publication ("The Daily Reviewer", "glyphicon-eye-open");
INSERT INTO movie_db.publication ("International Movie Critic", "glyphicon-fire");
INSERT INTO movie_db.publication ("MoviesNow", "glyphicon-time");
INSERT INTO movie_db.publication ("MyNextReview", "glyphicon-record");
INSERT INTO movie_db.publication ("Movies n\' Games", "glyphicon-heart-empty");
INSERT INTO movie_db.publication ("TheOne", "glyphicon-globe");
INSERT INTO movie_db.publication ("ComicBookHero.com", "glyphicon-flash");

INSERT INTO movie_db.reviewer ("Robert Smith","https://s3.amazonaws.com/uifaces/faces/twitter/angelcolberg/128.jpg","The Daily Reviewer");
INSERT INTO movie_db.reviewer ("Chris Harris","https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg","International Movie Critic");
INSERT INTO movie_db.reviewer ("Janet Garcia","https://s3.amazonaws.com/uifaces/faces/twitter/grrr_nl/128.jpg","MoviesNow");
INSERT INTO movie_db.reviewer ("Andrew West","https://s3.amazonaws.com/uifaces/faces/twitter/d00maz/128.jpg","MyNextReview");
INSERT INTO movie_db.reviewer ("Mindy Lee","https://s3.amazonaws.com/uifaces/faces/twitter/laurengray/128.jpg","Movies n\' Games");
INSERT INTO movie_db.reviewer ("Martin Thomas","https://s3.amazonaws.com/uifaces/faces/twitter/karsh/128.jpg","TheOne");
INSERT INTO movie_db.reviewer ("Anthony Miller","https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg","ComicBookHero.com");

INSERT INTO movie_db.moviereview ("Deadpool", "2016", 11, "Robert Smith");
INSERT INTO movie_db.moviereview ("Thor: Ragnarok", "2017", 7, "Chris Harris");
INSERT INTO movie_db.moviereview ("It", "2017", 8, "Janet Garcia");
INSERT INTO movie_db.moviereview ("Dunkirk", "2017", 8, "Andrew West");
INSERT INTO movie_db.moviereview ("Logan", "2017", 8, "Mindy Lee");
INSERT INTO movie_db.moviereview ("Batman V Superman", "2016", 6, "Martin Thomas");
INSERT INTO movie_db.moviereview ("Mad Max: Fury Road", "2015", 6, "Anthony Miller");
