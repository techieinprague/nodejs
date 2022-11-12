const EventEmitter = require('events');
const Logger = require('./logger')
const logger = new Logger();

//Register a listener
logger.on('loggingService', (arg) => {
    console.log(arg.data);
})

logger.log()
