import fs from 'fs'

const rename = async () => {
    const renamedFileExist = fs.existsSync("./files/properFilename.md")

    if(renamedFileExist) {
        throw Error("FS operation failed")
    }

    fs.rename("./files/wrongFilename.txt", "./files/properFilename.md", (err) => {
        if (err) throw err
    })
};

await rename();