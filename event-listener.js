const Logger = require('./logger')
const log = require('./logger')

const logger = new Logger()

// Register listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
})

logger.log('message')