const fs = require("node:fs")

fs.rename("arquivo.txt", "arquivo.csv", (err)=>{
    if(err){
        console.log("Não foi possivel renomear o arquivo ", err.message)
    }

    console.log("Arquivo renomeado com sucesso!")
})