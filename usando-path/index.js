const path = require("node:path")

const dir = "src"
const file = "app.js"

const fullPath = path.join(__dirname, dir, file)
console.log(fullPath)


const relativePath = "../arquivos/relatorio.pdf"

const absolutePath = path.resolve(__dirname, relativePath)
console.log(absolutePath)

const filename = path.basename(relativePath)

console.log(filename)

const ext = path.extname(relativePath)

console.log(ext)