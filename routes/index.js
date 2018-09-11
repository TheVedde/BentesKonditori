var express = require('express');
var router = express.Router();

const db = require("./../connection");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/sortiment", function (req, res) {

    db.query("SELECT * FROM cake", function (err, result) {
        if (err) throw err;
        res.render("pages/sortiment", { title: "Sortiment", arrayz: result })
    });


});

module.exports = router;
