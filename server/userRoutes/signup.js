require('dotenv').config({ path: '../secretes.env' });
const { log } = require('console');
const express = require('express');
const server = express();
const bcrypt = require('bcrypt');
const urlPath = process.env.SIGNUP;
const passwordHarshLength = 10;
const { userProfiles } = require('../database/models');
const cors = require('cors');


server.use(express.json())
server.use(cors())

server.get(`${urlPath}`, function (req, res) {
    res.json('signup page get ')
});

server.post(`${urlPath}`, async function (req, res) {
    const { username, email, password } = req.body;
    const findExistingAccount = await userProfiles.findOne({ username: username, email: email })
    if (findExistingAccount) {
        res.send('email exists')
    }
    if (!findExistingAccount) {
        try {
            const harshedPassword = await bcrypt.hash(password, passwordHarshLength)
            userProfiles.create({
                username: username,
                email: email,
                password: harshedPassword
            })
            res.status(200).send()
        } catch (error) {
            res.status(500).send()
            console.log(error)
        }
    }
});

// const userCredentials = {
//     username: username,
//     email: email,
//     password: password
// }
// const sigining = sign(userCredentials, secretKey, { expiresIn: '1h' })
// console.log(sigining)
module.exports = {
    signupGet: server,
    signupPost: server
}