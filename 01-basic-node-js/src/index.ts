import http, { request } from "http"

const PORT = 8000

const server = http.createServer((req, res) => {
    // console.log(req.url)
    // console.log(res)
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, {"content-type": "application/json"})
        res.write("welcome to our first api")
        res.end()
    } else if (req.url === "/api/v1/welcome"){
        res.writeHead(200)
        res.write("welcome again!")
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`)
})