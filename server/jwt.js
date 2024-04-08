const {sign} = require('jsonwebtoken')

const createAuthToken = (user)=>{
    const userToken = sign({name:user.username, password: user.password, id:user.id}, 'letusplay')
    return userToken
}

module.exports={createAuthToken}