const http = require('http')

const server = http.createServer((req, res) =>{
    console.log(req.method )
    console.log(res.method)

    res.statusCode = 200

    res.end('<h1>Hello World</h1>')
})


server.listen(4000, ()=>{
    console.log('Servidor Ativo!')
})