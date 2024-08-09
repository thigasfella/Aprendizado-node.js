import fs from "node:fs"

export default function rewriteFile(newText){
    fs.writeFile("./arquivo.txt", newText, "utf-8", (err)=>{
        if(err){
            console.log("Erro ao sobrescrever conteúdo ", err.message)
            return
        }else{
            console.log("Arquivo foi sobrescrito com sucesso!")
        }
    }) 
}