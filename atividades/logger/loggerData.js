const os = require("node:os")
const fs = require("node:fs")
const path = require("node:path")


setInterval(()=>{
    function logCreate(dirPath){
        if(!fs.existsSync(dirPath)){
            fs.mkdirSync(dirPath, {recursive: true})
        }
    }

    const dir = path.join(__dirname, 'log')
    const file = "log.txt"
    const fullPath = path.join(dir, file)

    logCreate(dir)


    
   const datas = {
        nameSystem: os.platform(),
        arch: os.arch(),
        modelCpu: os.cpus()[0].model,
        time: os.uptime(),
        useMemory:((os.totalmem() - os.freemem()) / os.totalmem()) * 100
    }
    console.log(`
                Nome do sistema: ${datas.nameSystem}\n
                Arquitetura do sistema: ${datas.arch}\n
                Modelo do processador: ${datas.modelCpu}\n
                Tempo de uso: ${datas.time} segundos\n
                Uso da memória: ${datas.useMemory.toFixed(2)}%\n\n`)

                const logEntry = `Nome do sistema: ${datas.nameSystem}\nArquitetura do sistema: ${datas.arch}\nModelo do processador: ${datas.modelCpu}\nTempo de uso: ${datas.time} segundos\nUso da memória: ${datas.useMemory.toFixed(2)}%\n\n`;

                fs.appendFile(fullPath, logEntry, (err)=>{
                    if(err){
                        console.log(err.message)
                    }
                })
}, 1000)