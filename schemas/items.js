var mongoose = require('mongoose');
const databaseInfo = require(__base__config + 'database');

var schema = new mongoose.Schema({
    name: String,
    status: String,
    order: String
});

module.exports = mongoose.model(databaseInfo.colectionName, schema);