import http from 'http'

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>hello worls http server</h1>")
    res.end()
})

server.listen(port, () => {
    console.log("i am ready to listen you on port");
})