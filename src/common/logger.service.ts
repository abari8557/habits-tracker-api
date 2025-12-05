    // my-logger.service.ts
    import { Injectable, LoggerService } from '@nestjs/common';
    import { createLogger, format, transports, Logger } from 'winston';

    @Injectable()
    export class MyLoggerService implements LoggerService {
      private readonly logger: Logger;

      constructor() {
        this.logger = createLogger({
          level: 'info', // Or configure dynamically
          format: format.combine(format.timestamp(), format.json()),
          transports: [
            new transports.Console(),
            // Add file transports here
          ],
        });
      }

      log(message: string, context?: string) {
        this.logger.info(message, { context });
      }

      error(message: string, trace?: string, context?: string) {
        this.logger.error(message, { trace, context });
      }

      warn(message: string, context?: string) {
        this.logger.warn(message, { context });
      }

      debug(message: string, context?: string) {
        this.logger.debug(message, { context });
      }

      verbose(message: string, context?: string) {
        this.logger.verbose(message, { context });
      }
    }