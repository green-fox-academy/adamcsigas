'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
let path = require('path');
app.use(express.static('root'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});