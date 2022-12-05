import fs from 'fs'

const read = async () => {
    const fileStream = fs.createReadStream("./files/fileToRead.txt")
    fileStream.setEncoding('UTF8');
    fileStream.on("data", data => process.stdout.write(data))  
};

await read();