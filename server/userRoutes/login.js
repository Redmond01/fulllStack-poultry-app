require('dotenv').config({ path: '../secretes.env' });
const {log} = require('console')
const express = require('express');
const server = express();
const bcrypt = require('bcrypt');
const { userProfiles } = require('../database/models');
const {sign} = require('jsonwebtoken')
const urlPath = process.env.LOGIN;
const tokenSecrete = process.env.JWTTOKENSECRETE;

server.get(`${urlPath}`, function (req, res) {
    res.json('login get')
});

server.post(`${urlPath}`, async function (req, res) {
    try {
        const { username, password, email } = req.body;
        const findUnique = await userProfiles.findOne({ username: username })
        if (!findUnique) {
            res.json('user not found!')
        }else{
            const uniqueUserPassword = findUnique.password
            bcrypt.compare(password, uniqueUserPassword).then(function (result) {
                if (!result) {
                    res.json('password not correct')
                } else {
                    try {
                        const userProfile={
                            username:findUnique.username,
                            password:uniqueUserPassword,
                            id:findUnique._id
                        }
                        const accessToken = sign({userProfile}, tokenSecrete)
                        res.cookie('user-token', accessToken, {httpOnly:true,secure:true})
                        res.json('welcome !!')
                    } catch (error) {
                        log({error:error.message})
                    }
                }
            })
        }
    } catch (e) {
        log({error:e.message})
    }
});




module.exports = {
    loginGet: server,
    loginPost: server
}