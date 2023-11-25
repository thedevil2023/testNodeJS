const http = require('http');
const db = require('./database/db')
const cors = require('cors')


const server = http.createServer((req, res) => {
    const url = req.url
    // Permisos CORS sencillo
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "*");

    switch (url) {
        case '/':
            res.end('estas en el main')
            break;

        case '/array':
            const array = JSON.stringify(db)
            res.end(array)
            break;

        default:
            res.end('bad request')
            break;
    }
})

server.listen(3000, () => { console.log('Server running') })