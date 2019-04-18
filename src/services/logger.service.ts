import winston = require('winston');

class LoggerService {
  private logger: winston.Logger;
  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'service-titan-app' },
      transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
      ],
    });

    //
    // If we're not in production then log to the `console` with the format:
    // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
    //
    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(
        new winston.transports.Console({
          format: winston.format.simple(),
        })
      );
    }
  }

  info(...message: any[]) {
    this.logger.info(message);
  }

  warn(...message: any[]) {
    this.logger.warn(message);
  }

  error(...message: any[]) {
    this.logger.error(message);
  }
}

export const loggerService = new LoggerService();
