const express = require('express');
const router = express.Router();

//TODO: Implement the Dashboard as a SPA application.

/* GET dashboard page. */
router.get('/', function(req, res, next) {
    res.render('dashboard_components/dashboard');
});

router.get("/transactions", function (req, res) {
    //TODO: Get a list over the transactions
});

module.exports = router;
