import zlib from 'zlib'
import fs from 'fs'

const decompress = async () => {
    const gzip = zlib.createInflate()
    const inputStream = fs.createReadStream('./files/archive.gz')
    const outputStream = fs.createWriteStream('./files/fileToCompress.txt')

    inputStream.pipe(gzip).pipe(outputStream)
};

await decompress();