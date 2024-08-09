import fs from "node:fs";

export default function readFile() {
    const filename = "./arquivo.txt"
    fs.readFile(filename, "utf-8", (err, data) => {
        if (err) {
            console.log("Erro ao ler o conteúdo do arquivo ", err.message);
            return;
        } else {
            console.log(data);
        }
    });
}
