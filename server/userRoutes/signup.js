require('dotenv').config({path:'../secretes.env'});
const {log} = require('console');
const express = require('express');
const server = express();
const bcrypt = require('bcrypt');
const urlPath = process.env.SIGNUP;
const passwordHarshLength = 10;
const {userProfiles} = require('../database/models');
server.use(express.json())


server.get(`${urlPath}`, function(req, res){
    res.json('signup page get ')
});

server.post(`${urlPath}`, async function(req, res){
    const {username, email, password} = req.body;
    bcrypt.hash(password, passwordHarshLength).then(function(harshedPassword){
        userProfiles.create({
            username:username,
            email:email,
            password:harshedPassword
        })
    });
    res.json('signupn post ');
});


module.exports={
    signupGet:server,
    signupPost:server
}