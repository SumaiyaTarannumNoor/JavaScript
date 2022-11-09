// NODE MODULE
// console.log(__filename);
// console.log(__dirname);

// var url = 'http://sumaiya.com/log';
// //********module wrapper function*****/
// function log(message){
//     //Send an HTTP request
//     console.log(message);
// }

// // module.exports.endPoint = url;
// module.exports = log;

//*****Extending EventEmitter */

const EventEmitter = require('events');


var url = 'http://sumaiya.com/log';

class Logger extends EventEmitter{
     log(message){
    //Send an HTTP request
    console.log(message);

    //Raise an event
    this.emit('messageLogged', {id: 1, url: 'http://'});
}
}
// module.exports.endPoint = url;
module.exports = Logger;