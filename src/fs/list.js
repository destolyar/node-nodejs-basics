import fs from 'fs'

const list = async () => {
    const folderEsists = fs.existsSync("./files")

    if(!folderEsists) {
        throw Error("FS operation failed")
    }

    const fileNames = fs.readdirSync("./files");
    console.log(fileNames)
};

await list();