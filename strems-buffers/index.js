const fs = require("node:fs")

// const streamLeitura = fs.createReadStream("arquivo.txt")
const streamLeitura = fs.createReadStream("wallpaper.png")

const buffer = []

streamLeitura.on("data", (chuck)=>{
    buffer.push(chuck)
    console.log("Um chuck foi processado.")
})

streamLeitura.on("end", ()=>{
    console.log("Buffer: \n", buffer)
    // const dadosCompletos = Buffer.concat(buffer).toString()
    // console.log("Dados lidos:\n", dadosCompletos)
})