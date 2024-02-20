function sayHello(name){
    console.log(`Hello` + name);
}
// sayHello(`Mansa`);
console.log(Window); //Will return not defined

//global functions

console.log() // global scope
setTimeout()
clearTimeout()

setInterval()
clearInterval()

window.console.log //or can use console.log(). The window is not available in Node so we use
global.console

//Creating a Node Server

// Import the 'http' module
const http = require('http');

// Define the host and port
const host = '127.0.0.1';
const port = 3000;

// Create a server that responds with 'Hello, World!' for all requests
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code for success
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Listen on the specified host and port
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
