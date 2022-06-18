const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 4000

const filePathMap = new Map([
  ['/', './index.html'],
  ['/contact-me', './contact-me.html'],
  ['/about', './about.html'],
])

const server = http.createServer((request, response) => {
  try {
    const data = fs.readFileSync(filePathMap.get(request.url), 'utf8');
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);

  } catch (error) {
    const data = fs.readFileSync(`./404.html`, 'utf8');
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(data);
    console.error(error);
  }
});

server.listen(port);

