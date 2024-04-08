require('dotenv').config({ path: '../secretes.env' });
const { log } = require('console')
const express = require('express');
const server = express();
const { verify } = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const routeUrl = process.env.CREATEAPI;
const tokenSecrete = process.env.JWTTOKENSECRETE

const { apiListing } = require('../database/models');

server.use(cookieParser())

const tokenVerification = function (req, res, next) {
    const header = req.headers.cookie
    const formatcookie = header.slice(11)
    if (!header) {
        res.json('user not validate, login')
    }
    verify(formatcookie, tokenSecrete , function(err){
        if(err){
            log({error:err.message})
        }else{
            // res.json('authenticated')
            next()
        }
    })
}
server.get(`${routeUrl}`, tokenVerification, async function (req, res) {
    const find = {
        details: 'grower mash'
    }
    const { details } = find
    const findone = await apiListing.findOne({ name: details }).lean().exec()
    res.json(findone)
})


server.post(`${routeUrl}`, function (req, res) {
    const { price, desc, name } = req.body
    apiListing.create({
        name: name,
        price: price,
        desc: desc,
    })
    res.json('create post')
})

module.exports = {
    createGet: server,
    createPost: server
}
