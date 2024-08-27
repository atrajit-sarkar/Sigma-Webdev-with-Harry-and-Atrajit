import fs from "fs/promises"
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;
const content= await fs.readFile("index.html")
// console.log(content.toString());
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(content.toString());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
