const express = require('express');
const router = express.Router();

const db = require("./../connection");

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

router.get('/sortiment', function(req, res) {
    db.query("SELECT * FROM cake", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;
