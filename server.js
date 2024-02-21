// //Require allows node to transfer data over the Hyper Text Transfer Protocol (HTTP) used by the internet.
// const http = require(`http`);

// //define the location and port of the server.
// const hostname = `127.0.0.1`;
// const port = 3000;

// //The variables req and res correspond to the request and response objects of the server communications
// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader(`Content-Type`, `text/plain`);
// //   res.end(`Hello World!\n`);
// // });

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>This is my first server and am excited...</p>');
//     res.end();
//   });

// //tell the server to actually listen for communications
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//Added two more servers
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    // Handle the root path
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>This is the home page.</p>');
    res.end();
  } else if (req.url === '/about') {
    // Handle the "/about" path
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: blue">About Us</h1>');
    res.write('<p>This is the about page.</p>');
    res.end();
  } else {
    // Handle other paths (404 Not Found)
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">404 Not Found</h1>');
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
