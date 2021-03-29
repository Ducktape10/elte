// import http from 'http';

// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello there!');
// }).listen(5000);

import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello thereasdasdas!')
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listens on localhost:${process.env.PORT || 3000}`);
});