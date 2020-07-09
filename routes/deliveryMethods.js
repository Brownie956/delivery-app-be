var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([
        {method: "standard", price: 0.00, formattedName: "Standard delivery (3-5 working days)"},
        {method: "next-day", price: 3.20, formattedName: "Next day delivery (1-2 working days)"},
        {method: "nominated", price: 5.00, formattedName: "Nominated delivery date"}
    ]);
});

module.exports = router;
