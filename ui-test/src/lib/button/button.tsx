import styles from './button.module.css';
import { createLogger } from '@anton-suite/utils-logger';

const logger = createLogger('Button');

export function Button() {
  logger.warn("This is a log message");
  return (
    <div className={styles['container']}>
      <h1>Welcome to Button!</h1>
    </div>
  );
}

export default Button;
