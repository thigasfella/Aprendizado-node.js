const fs = require("node:fs")

fs.unlink("arquivo.csv", (err)=>{
    if(err){
        console.log("Erro ao excluir arquivo", err.message)
    }
    console.log("Arquivo excluído com sucesso!")
})