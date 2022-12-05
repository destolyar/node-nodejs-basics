import fs from 'fs'

const copy = async () => {
    const directoryExist = fs.existsSync("./files_copy")

    if(directoryExist) {
        throw Error("FS operation failed")
    }

    fs.mkdirSync("./files_copy")

    fs.readdir("./files", (err, filesNames) => {
        if (err) throw err
        
        filesNames.forEach(fileName => {
            const fileContent = fs.readFileSync("./files/" + fileName, "utf8", (err) => {
                if (err) throw err
            })
            
            fs.writeFile("./files_copy/" + fileName, fileContent, (err) => {
                if (err) throw err
            })
        })
    })
    
};

copy();