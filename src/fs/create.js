import fs from 'fs'

const create = async () => {
    const fileExist = fs.existsSync("./files/fresh.txt")

    if(fileExist) {
        throw Error("FS operation failed")
    }

    fs.writeFile("./files/fresh.txt", "I am fresh and young", (err) => {
        if (err) throw err
    })
};

await create();