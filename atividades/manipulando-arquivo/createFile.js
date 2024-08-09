import fs from "node:fs"

export default function createFile(text){
    fs.writeFile("./arquivo.txt", text, "utf-8", (err)=>{
        if(err){
            console.log("Erro ao criar arquivo ", err.message)
        }
        console.log("Arquivo criado com sucesso!")
    })
}