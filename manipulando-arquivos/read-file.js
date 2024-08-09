const fs = require("node:fs")
const filename = "arquivo.txt"
const exists = fs.existsSync(filename)
if(exists){
    fs.readFile("./arquivo.txt", "utf-8", (error, data) =>{
        if(error){
            console.log("Erro ao ler o arquivo: ", error.message)
            return
        }
        const entries = data.split(",")
        console.log(entries)
        entries.forEach((entry) => console.log(entry))
    })
} else{
    console.log("O arquivo não existe!")
}

// try {
//     const data = fs.readFileSync("./arquivo.txt", "utf-8")

//     console.log(data)
// } catch (error) {
//     console.log("Erro ao ler o arquivo: ", error.message)
// }