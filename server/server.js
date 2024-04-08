require('dotenv').config({path:'./secretes.env'});
const {log} = require ('console');
const express = require ('express');
const server = express();
const port = process.env.PORT

server.use(express.json())

const {signupGet, signupPost} = require('./userRoutes/signup')
const {loginGet,loginPost} = require('./userRoutes/login')
const {createGet,createPost} = require('./userRoutes/createAPI')

server.get('/', function(req, res){
    res.json('hello world')
})

server.use('/', signupGet)
server.use('/', signupPost)
server.use('/', loginGet)
server.use('/', loginPost)
server.use('/', createPost)
server.use('/', createGet)




server.listen(port, function(){
    log(`we are live on port ${port}`)
})