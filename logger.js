const EventEmitter = require('events');

class Logger extends EventEmitter {
    log() {
        //Raise an event
        this.emit('loggingService', {data : 'User Loggin in'})    
    }
}

module.exports = Logger;
// module.exports.printSomething = printSomething;