import { pipeline, Transform } from 'stream';

const transform = async () => {
    const readable = process.stdin
    const writable = process.stdout

    const transformStream = new Transform({
        transform(chunk, enc, cb) {
            const chunkStringified = chunk.toString().trim()
            const reversedChunk = chunkStringified.split('').reverse().join('')

            this.push(reversedChunk + '\n')

            cb()
        }
    })

    pipeline(
        readable,
        transformStream,
        writable,
        err => {
            console.error(err)
        }
    )
};

await transform();