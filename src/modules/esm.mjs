import path from 'path'
import { release, version } from 'os'
import http from 'http'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import './files/c.js'
import a from './files/a.json' assert {type: 'json'};
import b from './files/b.json' assert {type: 'json'};


const random = Math.random();

const unknownObject = random > 0.5 ? a : b;
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = http.createServer((_, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default  {
    unknownObject,
    myServer,
};

