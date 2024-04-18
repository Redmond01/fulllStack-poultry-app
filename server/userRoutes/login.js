require('dotenv').config({ path: '../secretes.env' });
const {log} = require('console');
const express = require('express');
const server = express();
const bcrypt = require('bcrypt');
const { userProfiles } = require('../database/models');
const {sign} = require('jsonwebtoken');
const urlPath = process.env.LOGIN;
const tokenSecrete = process.env.JWTTOKENSECRETE;
const cors = require('cors');
const cookieParser = require('cookie-parser');



const corsOptioins ={
    origin:'http://localhost:5174',
    credentials:true,
}
server.use(cookieParser())

let accessToken;
server.get(`${urlPath}`, function (req, res) {
    res.json('login get')
});

server.post(`${urlPath}`,cors(corsOptioins), async function (req, res) {
    try {
        // console.log(req.body)
        const { username, password, email } = req.body;
        const findUnique = await userProfiles.findOne({ username: username })
        if (!findUnique) {
            res.send('user not found!')
        }else{
            const uniqueUserPassword = findUnique.password
            bcrypt.compare(password, uniqueUserPassword).then(function (result) {
                if (!result) {
                    res.send('user not found!')
                } else {
                    try {
                        const userProfile={
                            username:findUnique.username,
                            password:uniqueUserPassword,
                            id:findUnique._id
                        }
                        accessToken = sign({userProfile}, tokenSecrete)
                        res.cookie('user-token', accessToken, {
                            maxAge:3600000,
                        })
                        res.status(200).send()
                    } catch (error) {
                        log({error:error.message})
                        res.status(400).send()
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