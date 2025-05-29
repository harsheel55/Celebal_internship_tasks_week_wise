// index.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    const filePath = path.join(__dirname, 'files', query.filename || '');

    // CREATE FILE
    if (pathname === '/create' && req.method === 'GET') {
        const content = query.content || '';
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error creating file');
            }
            res.writeHead(200);
            res.end(`File ${query.filename} created`);
        });
    }

    // READ FILE
    else if (pathname === '/read' && req.method === 'GET') {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end('File not found');
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    }

    // DELETE FILE
    else if (pathname === '/delete' && req.method === 'GET') {
        fs.unlink(filePath, (err) => {
            if (err) {
                res.writeHead(404);
                return res.end('File not found or already deleted');
            }
            res.writeHead(200);
            res.end(`File ${query.filename} deleted`);
        });
    }

    // DEFAULT
    else {
        res.writeHead(404);
        res.end('Invalid Route');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
