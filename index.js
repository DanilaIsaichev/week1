const fs = require('fs');
const http = require('http')
http.Server((req, res) =>  {
    if (req.url === '/login') return res.end('190522');
    if (req.url === '/sample') return res.end('text/plain');
    res.end(String(fs.readFileSync(__filename)));
})
.listen(4321);
