const path = require('path');
const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/uber');

//create a var that points to the models folder
var models_path = path.join(__dirname, './../models');
//read all of the files in the models_path and require (run) each of the js files
fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})