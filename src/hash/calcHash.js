import crypto from 'crypto'
import fs from "fs"

const calculateHash = async () => {
    const alghoritm = "sha256"
    const shasum = crypto.createHash(alghoritm)

    const filename = "./files/fileToCalculateHashFor.txt"
    fs.readFile(filename, "utf8", (err, data) => {
        if(err) {
            console.error(err)
        }

        shasum.update(data)
        const hash = shasum.digest('hex')
        
        console.log(hash)
    })
};

await calculateHash();