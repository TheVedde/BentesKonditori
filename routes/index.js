var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/sortiment", function (req, res) {
    res.render("pages/sortiment", { title: "Sortiment" })
});

module.exports = router;
