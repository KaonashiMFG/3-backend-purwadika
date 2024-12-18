import http from "http";
const PORT = 8000;
const server = http.createServer((req, res) => {
    // console.log(req.url)
    // console.log(res)
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write("welcome to our first api");
        res.end();
    }
});
server.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`);
});
