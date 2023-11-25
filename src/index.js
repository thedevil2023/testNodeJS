const http = require('http');
const db = require('./database/db')


const server = http.createServer((req, res)=>{
    const url = req.url

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

server.listen(3000, ()=>{console.log('Server running')})