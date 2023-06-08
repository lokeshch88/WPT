const http = require("http")
//create a server
var server = http.createServer(function (req, resp) {
    console.log("method:", req.method, "url: ", req.url)
    resp.writeHeader(200, { "content-type": "text/html" })
    resp.write("<h1>Welcome to nodejs</h1>")
});
server.listen(5000, console.log("server started on port 5000"))