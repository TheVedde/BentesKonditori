const sql = require("mysql");

const db = sql.createConnection({
    host: "localhost",
    database: "conditory",
    user: "vedde",
    password: "Aa123456&"
});

module.exports = db;