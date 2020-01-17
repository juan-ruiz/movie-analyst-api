const port = process.env.PORT || 3000;
const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'local';
const password = process.env.DB_PASS || 'test';
const database = process.env.DB_NAME || 'movie_db';

module.exports = {
    port,
    host,
    user,
    password,
    database
}