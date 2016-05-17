var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/protein', function(req, res) {
	res.send('Path: /protein');
};

router.get('/testosterone', function(req, res) {
	res.send('Path: /testosterone');
};

router.get('/candy', function(req, res) {
	res.send('Path: /candy');
};

module.exports = router;
