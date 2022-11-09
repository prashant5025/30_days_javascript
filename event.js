const EventEmitter = require('events');

const cutomEmitter = new EventEmitter();

// cutomEmitter.on('res',() => {
//     console.log(`data received`);
// })
// cutomEmitter.on('res',(name,id,email,location) => {
//     console.log(`data received user ${name} with id: ${id} email: ${email} localtion: ${location}`);
// })

// cutomEmitter.emit('res','Prashant', 22,'psingh@gmail.com','India');

const http = require('http');

const server = http.createServer()

//subscribing to the event / listening to the event
server.on('request',(req,res) => {
    res.end('Welcome');
})

server.listen(5000,() => {
    console.log('server listening on port 5000');
});