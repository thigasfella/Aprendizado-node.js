const fs = require("node:fs")

const content = "Conteúdo do novo arquivo assíncrono"

fs.writeFile("./arquivo.txt", content, "utf-8", (err)=>{
    if(err){
    console.log("Erro ao escrever o arquivo: ", error.message)
    return
    }
    console.log("Arquivo criado com sucesso de forma assíncrona")

})
// try{
//     fs.writeFileSync("./arquivo.txt",  "Olá, mundo!", "utf-8")
// } catch(error){
//     console.log("Erro ao escrever o arquivo: ", error.message)
// }