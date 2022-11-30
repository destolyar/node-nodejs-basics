import fs from 'fs'

const read = async () => {
    const fileToReadExists = fs.existsSync("./files/fileToRead.txt")

    if(!fileToReadExists) {
        throw Error("FS operation failed")
    }

    const fileContent = fs.readFileSync("./files/fileToRead.txt", "utf-8", (err) => {
        if (err) throw err
    })
    console.log(fileContent)
};

await read();