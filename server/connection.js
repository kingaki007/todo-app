const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoDB = 'mongodb://127.0.0.1/todo-app';

mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {mongoose};