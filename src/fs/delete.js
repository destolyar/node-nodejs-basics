import fs from 'fs'

const remove = async () => {
    const fileForRemoveExist = fs.existsSync("./files/fileToRemove.txt")

    if (!fileForRemoveExist) {
        throw Error("FS operation failed")
    }

    fs.unlink("./files/fileToRemove.txt", (err) => {
        if (err) throw err
    })
};

await remove();