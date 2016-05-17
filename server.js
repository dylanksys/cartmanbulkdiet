var express = require ('express');

var supplements = require('../routers/supplements');

var app = express();

app.use('/', supplements);

app.listen(9000, function () {
	console.log('cartmanbulkdiet listening on port 9000');
};
