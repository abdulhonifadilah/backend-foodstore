const mongoose = require('mongoose');
const { dbUser, dbName, dbPass, dbHost, dbPort } = require('../app/config');

mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);
// mongodb://localhost:27017/foodstore
// mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin
db = mongoose.connection;


module.exports=db;