var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.get('/', (req, res) => {
    res.json("working");
})



app.listen(8000, () => {
    console.log("On 8000");
})