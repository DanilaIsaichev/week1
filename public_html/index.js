const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3000
const server = http.createServer((req, res) =>  {
    if (req.url === '/login') return res.end('190522');
    if (req.url === '/sample') return res.end('text/plain');
    res.end(String(fs.readFileSync(__filename)));
});
server.listen(port,() => {
    console.log(`Server running at port `+port);
  });
