import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const server = express()
const port = 3000
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

server.listen(port, () => {
    console.log("listening...");
})
