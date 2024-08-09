const express = require('express')
const path = require('path')

const app = express()

const storedEmails = [

]

app.use(express.static('src'))

app.set('views', path.join(__dirname, 'views') )
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.render('newslatter.ejs')
})

app.post('/register', (req, res) =>{
    const email = req.body.email
    storedEmails.push(email)
    res.redirect('/cadastrado')
})

app.get('/cadastrado', (req, res) =>{
    res.render('sucess')
})

app.get('/emails', (req, res) =>{
    res.render('emails', {emails: storedEmails})
})

module.exports = voltarParaPaginaCadastro = (req, res) =>{
    res.redirect('newslatter')
}

const APP = 3000
app.listen(APP, () =>{
    console.log('Servidor Iniciado!')
})