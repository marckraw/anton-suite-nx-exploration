import { createLogger } from '@anton-suite/utils-logger';

const logger = createLogger('Anton');

export class Anton {
  constructor() {
    logger.info('Anton SDK initialized');
  }

  greet() {
    logger.info('Hello from Anton SDK');
  }
}
