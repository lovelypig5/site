var express = require('express');
var fallback = require('express-history-api-fallback');
var logger = require('./src/logger');

var app = express();

app.use(express.static('assets'));
// history api fallback
app.use(fallback('index.html', {
    root: `${__dirname}/assets`
}));

// app.use(express.static('assets/dist'));
// app.use(fallback('index.html', {
//     root: `${__dirname}/assets/dist`
// }));

app.listen(3002, function() {
    logger.info(`Backend service listening on port 3002!`);
});