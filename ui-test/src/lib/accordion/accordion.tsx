'use client'
import { createLogger } from '@anton-suite/utils-logger';
import styles from './accordion.module.css';



const logger = createLogger('Accordion');
export function Accordion() {

  logger.error("This is a log message from CLIENT: ");

  return (
    <div className={styles['container']}>
      <h1>Welcome to Accordion!</h1>
    </div>
  );
}

export default Accordion;
