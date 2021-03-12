const http = require('http');
const fs = require('fs')

const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'application-json'});
    res.end(JSON.stringify({
        'name': 'Aleksandr',
            'lastName': 'Grigoryan'
    }))
});
const data = fs.readdirSync('./text.txt', 'utf-8');
console.log(data);

server.listen((2021))



