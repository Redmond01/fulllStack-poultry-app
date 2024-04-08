require('dotenv').config({path:'../secretes.env'})
const mongoose = require('mongoose');
const {userSchema} = require('./user');
const {listSchema} = require('./api')
const userDBurl = process.env.USERDBURL;
const apiDBurl = process.env.API


const usercredentials = mongoose.createConnection(userDBurl);
const apiconnection = mongoose.createConnection(apiDBurl);
const apiListing = apiconnection.model('api', listSchema)
const userProfiles = usercredentials.model('usercredentials',userSchema)

module.exports={userProfiles, apiListing}