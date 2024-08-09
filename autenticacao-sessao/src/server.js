const express = require('express')
const session = require('express-session')
const path = require('node:path')
const router = require('./routes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'palavra-chave', //affsdf8sd78sfd897fsdfds
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))

app.use(router)

const PORT = 3000
app.listen(PORT, () => console.log("Servidor iniciado!"))