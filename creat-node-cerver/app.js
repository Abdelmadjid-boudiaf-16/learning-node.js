const http = require("http");
const routes = require("./routes");




const server = http.createServer(routes);

server.listen(3000);

/* 
(req, res) => {
  //   console.log(req.url, req.method, req.headers);
  // process.exit()  end the server

  //send response
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>test server!</title><body><form action='/message' method='POST'><input type='text' name='test' /><button>send</button></form></body></head></html > "
    );
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFileSync("test.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
}
*/
