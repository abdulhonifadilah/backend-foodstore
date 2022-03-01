const mongoose = require('mongoose');
const { dbUser, dbName, dbPass, dbHost, dbPort } = require('../app/config');

mongoose.connect('mongodb+srv://admin:root@cluster0.xhm4h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// mongodb://localhost:27017/foodstore
// mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin
// `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
db = mongoose.connection;


module.exports=db;