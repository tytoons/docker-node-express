'use strict';

const express = require('express');
const PORT = 8000;

const app = express();
app.get('/', function (req, res) {
	res.send('Tyler testing\nDocker node\n');
});

app.listen(PORT);
console.log('Running on localhost:' + PORT);