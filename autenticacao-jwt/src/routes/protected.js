const express = require('express')
const authmiddleware = require('../middleware/auth-middleware')

const protectedRouter = express.Router()

protectedRouter.get('/dashboard', authmiddleware, (req, res) =>{
    const username = req.authenticatedUser.username
    res.json({message: `você está na area protegida. Bem vindo(a), ${username}`})
})

module.exports = protectedRouter