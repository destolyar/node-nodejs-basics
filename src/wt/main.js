import os from 'os'
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads'

const performCalculations = async () => {
    if(isMainThread) {
        const cpuCores = os.cpus()
        const threads = new Set()
        
        cpuCores.forEach((_core, index) => threads.add(new Worker("./worker.js", { workerData: { number: 10 + index } })))
        
        threads.forEach(worker => worker.on('message', msg => console.log(msg)))
    }
};

await performCalculations();