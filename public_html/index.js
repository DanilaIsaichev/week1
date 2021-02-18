f(x) => (return x*x);
const fs = require('fs');
const http = require('http')
http.Server((req, res) =>  {
    if (req.url === '/login' return '190522';
    if (req.url === '/sample' return 'text/plain';
    res.end(String(fs.readFileSync(__filename))))
.listen(4321);
