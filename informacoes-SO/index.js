const os = require("node:os")

const plataform = os.platform()
console.log("Plataforma do SO: ", plataform)

const arch = os.arch()
console.log("Arquitetura do SO: ", arch)

const cpus = os.cpus()
console.log("Informações da CPU: ", cpus.length)

const memoria = os.totalmem()
console.log("Total de memoria do pc: ", (memoria / 1024 / 1024/ 1024), "GB")
