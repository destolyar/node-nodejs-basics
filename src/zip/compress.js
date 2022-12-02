import zlib from 'zlib'
import fs from 'fs'

const compress = async () => {
    const gzip = zlib.createDeflate()
    const inputStream = fs.createReadStream('./files/fileToCompress.txt', "utf-8")
    const outputStream = fs.createWriteStream('./files/archive.gz')

    inputStream.pipe(gzip).pipe(outputStream)
};

await compress();