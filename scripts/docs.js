const http = require('http');
const fs = require('fs');
const path = require('path')

const dir = 'docs';

const server = http.createServer((req, res) => {
    const url = req.url;
    let filePath = url.split('/').slice(1).join('/');
    let targetDirectory = dir;

    if (filePath === '') {
        filePath = "index.html";
    }

    const fullPath = path.join(__dirname, '..', targetDirectory, filePath);

    fs.exists(fullPath, (exists) => {
        if (exists) {
            fs.readFile(fullPath, (err, data) => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Internal server error');

                } else {
                    const contentType = getContentType(filePath);
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(data);
                }
            });
        } else {
            res.statusCode = 404;
            res.end('Not found');
        }
    });
});

function getContentType(filename) {
    const extension = filename.split('.').pop();

    switch (extension) {
        case 'html':
            return 'text/html';
        case 'css':
            return 'text/css';
        case 'js':
            return 'application/javascript';
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        default:
            return 'text/plain';
    }
}

const port = 3030;
server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});
