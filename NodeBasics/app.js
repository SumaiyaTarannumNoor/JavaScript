//This file consists of the code snippents from -https://www.youtube.com/watch?v=TlB_eWDSMt4&t=3441s.

// function sayHello(name){
//     console.log('Hello '+ name);
// }

//************** */

// sayHello('Sumaiya')

// setTimeout()
// clearTimeout();

// setInterval()
// clearInterval();

//******Loading a module*********** */

// var message = "Hello";
// console.log(global.message);

// console.log(Module)

// require('./logger');

//************Path Module*********** */

// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

//***********OS Module************* */

// const os = require ('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// //Template Srtring from ES6 / ES2015 or ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);
// console.log(`Usable Memory: ${totalMemory - freeMemory}`);

//***********File System Module************** */

// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function (err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// })

// fs.readdir('$', function (err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// })

// ************Event Module*************//
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //Register a listener
// emitter.on('messageLogged', function(){
//     console.log('Listner called');
// });

// //Raise an event
// emitter.emit('messageLogged');

//*****Event Arguments********** */

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //Register a listener
// emitter.on('messageLogged', function(arg){ //e,
//     console.log('Listner called', arg);
// });

// //Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'http://'});

//Using arrow function.
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //Register a listener
// emitter.on('messageLogged', (arg) => { //e,
//     console.log('Listner called', arg);
// });

// //Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'http://'});

//***********Extending EventEmitter************ */
// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// //Register a listener
// logger.on('messageLogged', (arg) => { //e/event
//     console.log('Listner called', arg);
// });

// logger.log('message');

//*******HTTP Module*******/
// const http = require('http');

// const server = http.createServer();

// server.on('connection', (socket)=> {
//     console.log('NewConnection...')
// });
// server.listen(3000);

// console.log('Listening to port 3000...');

/////////
// const http = require('http');

// const server = http.createServer((req, res)=>{
//     if(req.url ==='/'){
//     res.write('Hello World');
//     res.end();
//     }

//     if (req.url === '/api/numbers'){
//         res.write(JSON.stringify([1,2,3,4]));
//         res.end();
//     }

// });

// server.listen(3000);

// console.log('Listening to port 3000...');
