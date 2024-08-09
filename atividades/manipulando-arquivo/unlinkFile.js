import fs from "node:fs"

export default function unlinkFile(){
    fs.unlink("./arquivo.txt", (err)=>{
        if(err){
            console.log("Não foi possível apagar o arquivo: ", err.message)
        }else{
            console.log("Arquivo deletado com sucesso!")
        }
    })
}