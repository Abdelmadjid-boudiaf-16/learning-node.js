const fs = require('fs')

const reqHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write("<html><head><title>testing server</title></head><body><form action='/message' method='POST'><input type='text' name='test'/><button>send</button></form></body></html>")
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            const message = parseBody.split('=')[1]

            fs.writeFile('msg.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
}


module.exports = reqHandler;