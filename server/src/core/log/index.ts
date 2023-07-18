import { ENVIRONMENT, LOG_DATE_PATTERN, LOG_DIR } from '../config/appConfig'
import fs from 'fs'
import path from 'path'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

let dir = LOG_DIR
if (!dir) dir = path.resolve('logs')

// Create directory if it doesn't exist
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

const logLevel = ENVIRONMENT === 'development' ? 'debug' : 'info'

const dailyRotateFile = new DailyRotateFile({
  level: logLevel,
  filename: `${dir}/%DATE%.log`,
  datePattern: LOG_DATE_PATTERN,
  zippedArchive: true,
  handleExceptions: true,
  maxSize: '20m',
  maxFiles: '14d',
  format: format.combine(format.errors({ stack: true }), format.timestamp()),
})

const log = createLogger({
  transports: [
    new transports.Console({
      level: logLevel,
      format: format.combine(format.errors({ stack: true }), format.prettyPrint()),
    }),
    dailyRotateFile,
  ],
  exceptionHandlers: [dailyRotateFile],
  exitOnError: false,
})

export default log
